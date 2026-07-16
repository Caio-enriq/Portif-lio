import { projects, getProjectBySlug, getFeaturedProjects } from "@/data/projects";

describe("Projects Data", () => {
  it("should have projects array", () => {
    expect(projects).toBeDefined();
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it("should return project by slug", () => {
    const project = getProjectBySlug("enterprise-dashboard");
    expect(project).toBeDefined();
    expect(project?.id).toBe("enterprise-dashboard");
  });

  it("should return undefined for non-existent slug", () => {
    const project = getProjectBySlug("non-existent");
    expect(project).toBeUndefined();
  });

  it("should return featured projects", () => {
    const featured = getFeaturedProjects();
    expect(featured.length).toBeGreaterThan(0);
    featured.forEach((p) => {
      expect(p.featured).toBe(true);
    });
  });

  it("should have required fields on each project", () => {
    projects.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(project.slug).toBeDefined();
      expect(project.title).toBeDefined();
      expect(project.description).toBeDefined();
      expect(project.techStack).toBeDefined();
      expect(Array.isArray(project.techStack)).toBe(true);
    });
  });
});
