"use client";

import { useEffect, useRef } from "react";

interface WebGLShaderProps {
  className?: string;
  opacity?: number;
  /** When false, the render loop keeps running but skips all GL work (used to
   * pause the shader when the host section is off-screen). */
  active?: boolean;
  /** Subtly drift the flow field toward the cursor via a `u_mouse` uniform. */
  mouseReact?: boolean;
  /** Use the light-mode palette (soft pastels) instead of the dark indigo one. */
  light?: boolean;
}

// Two palettes for the fragment shader, as [r, g, b] triplets (0..1). The render
// loop pushes these into the u_cN / u_highlight uniforms every frame, so swapping
// themes needs no GL program rebuild.
const DARK_PALETTE: [number, number, number][] = [
  [0.13, 0.14, 0.35], // deep indigo
  [0.2, 0.15, 0.45], // purple
  [0.1, 0.2, 0.35], // teal
  [0.15, 0.1, 0.3], // dark violet
  [0.08, 0.04, 0.12], // warm highlight
];
const LIGHT_PALETTE: [number, number, number][] = [
  [0.72, 0.74, 0.92], // soft indigo
  [0.8, 0.74, 0.93], // soft purple
  [0.7, 0.82, 0.92], // soft blue
  [0.83, 0.78, 0.92], // soft violet
  [0.95, 0.88, 0.85], // warm highlight
];

export function WebGLShader({
  className,
  opacity = 0.3,
  active = true,
  mouseReact = false,
  light = false,
}: WebGLShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<{
    gl: WebGLRenderingContext | null;
    program: WebGLProgram | null;
    uniforms: {
      resolution: WebGLUniformLocation | null;
      time: WebGLUniformLocation | null;
      mouse: WebGLUniformLocation | null;
    };
    animationId: number | null;
    startTime: number;
  }>({
    gl: null,
    program: null,
    uniforms: { resolution: null, time: null, mouse: null },
    animationId: null,
    startTime: 0,
  });

  // Live prop mirrors so the GL setup effect can stay `[]` (no rebuilds).
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const mouseReactRef = useRef(mouseReact);
  useEffect(() => {
    mouseReactRef.current = mouseReact;
  }, [mouseReact]);

  const lightRef = useRef(light);
  useEffect(() => {
    lightRef.current = light;
  }, [light]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    // Vertex shader — simple fullscreen quad
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader — organic, natural flowing background
    const fragmentShaderSource = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform vec2 u_mouse;
      uniform vec3 u_c1;
      uniform vec3 u_c2;
      uniform vec3 u_c3;
      uniform vec3 u_c4;
      uniform vec3 u_highlight;

      // Smooth noise
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = rot * p * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        float t = time * 0.15;

        // Subtle drift toward the cursor (mouse is 0..1, origin bottom-left).
        vec2 mouse = u_mouse - 0.5;

        // Organic flow field
        vec2 q = uv * 1.5;
        q += 0.2 * vec2(
          fbm(q + vec2(t * 0.1, -t * 0.13)),
          fbm(q + vec2(t * 0.12, t * 0.09))
        );
        q += 0.12 * mouse;

        // Layered organic noise
        float f1 = fbm(q + vec2(t * 0.08, -t * 0.11));
        float f2 = fbm(q * 1.8 + vec2(-t * 0.07, t * 0.1) + f1 * 0.5);

        // Soft color gradient — palette injected per-theme via uniforms.
        vec3 color1 = u_c1;
        vec3 color2 = u_c2;
        vec3 color3 = u_c3;
        vec3 color4 = u_c4;

        // Mix based on noise layers
        float n = f1 * 0.4 + f2 * 0.6;
        vec3 col = mix(color1, color2, smoothstep(0.2, 0.6, n));
        col = mix(col, color3, smoothstep(0.4, 0.8, f1));
        col = mix(col, color4, smoothstep(0.6, 1.0, f2));

        // Subtle luminosity pulse
        float pulse = 0.85 + 0.15 * sin(t * 2.0 + length(uv) * 1.5);
        col *= pulse;

        // Soft vignette
        float vig = 1.0 - length(uv) * 0.35;
        col *= vig;

        // Very subtle warm highlight
        float highlight = smoothstep(0.8, 0.0, length(uv - vec2(0.3, 0.2)));
        col += u_highlight * highlight;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "resolution");
    const timeLocation = gl.getUniformLocation(program, "time");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");
    const color1Location = gl.getUniformLocation(program, "u_c1");
    const color2Location = gl.getUniformLocation(program, "u_c2");
    const color3Location = gl.getUniformLocation(program, "u_c3");
    const color4Location = gl.getUniformLocation(program, "u_c4");
    const highlightLocation = gl.getUniformLocation(program, "u_highlight");

    // Pointer target/current (normalised 0..1, y flipped to match GL origin).
    const mouseTarget = { x: 0.5, y: 0.5 };
    const mouseCurrent = { x: 0.5, y: 0.5 };

    const onMouseMove = (event: MouseEvent) => {
      if (!mouseReactRef.current) return;
      mouseTarget.x = event.clientX / window.innerWidth;
      mouseTarget.y = 1 - event.clientY / window.innerHeight;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    };

    const render = (timestamp: number) => {
      if (!glRef.current.startTime) glRef.current.startTime = timestamp;
      const elapsed = (timestamp - glRef.current.startTime) / 1000;

      if (activeRef.current) {
        resize();

        // Ease the cursor influence for smoothness.
        mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.06;
        mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.06;
        gl.uniform2f(mouseLocation, mouseCurrent.x, mouseCurrent.y);

        gl.uniform1f(timeLocation, elapsed);

        const palette = lightRef.current ? LIGHT_PALETTE : DARK_PALETTE;
        gl.uniform3f(color1Location, palette[0][0], palette[0][1], palette[0][2]);
        gl.uniform3f(color2Location, palette[1][0], palette[1][1], palette[1][2]);
        gl.uniform3f(color3Location, palette[2][0], palette[2][1], palette[2][2]);
        gl.uniform3f(color4Location, palette[3][0], palette[3][1], palette[3][2]);
        gl.uniform3f(highlightLocation, palette[4][0], palette[4][1], palette[4][2]);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      glRef.current.animationId = requestAnimationFrame(render);
    };

    glRef.current = {
      gl,
      program,
      uniforms: { resolution: resolutionLocation, time: timeLocation, mouse: mouseLocation },
      animationId: null,
      startTime: 0,
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    if (mouseReactRef.current) window.addEventListener("mousemove", onMouseMove, { passive: true });

    glRef.current.animationId = requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    return () => {
      if (glRef.current.animationId) cancelAnimationFrame(glRef.current.animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      if (program) {
        gl.deleteProgram(program);
      }
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
