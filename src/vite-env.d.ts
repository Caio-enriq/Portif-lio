/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_BASE?: string;
  /** GitHub username for stats, contribution SVG, and links (default: Caio-enriq) */
  readonly VITE_GITHUB_USERNAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
