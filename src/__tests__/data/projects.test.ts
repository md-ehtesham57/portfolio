import { describe, it, expect } from "vitest";
import { projects, getProjectBySlug, getProjectByTitle } from "@/data/projects";

describe("projects data", () => {
  it("has at least 3 projects", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });

  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("each project has required fields", () => {
    for (const p of projects) {
      expect(p.title).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.tech.length).toBeGreaterThan(0);
      expect(p.accent).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(["Full-Stack", "Frontend", "Design"]).toContain(p.tag);
    }
  });

  it("each project has valid GitHub and live URLs or placeholders", () => {
    for (const p of projects) {
      if (p.github !== "#") {
        expect(p.github).toMatch(/^https?:\/\//);
      }
      if (p.live !== "#") {
        expect(p.live).toMatch(/^https?:\/\//);
      }
    }
  });

  it("each project has architecture sections", () => {
    for (const p of projects) {
      expect(p.architecture.summary).toBeTruthy();
      expect(p.architecture.sections.length).toBeGreaterThan(0);
      expect(p.features.length).toBeGreaterThan(0);
      expect(p.challenges.length).toBeGreaterThan(0);
    }
  });

  it("getProjectBySlug returns correct project", () => {
    const hexcode = getProjectBySlug("hexcode");
    expect(hexcode?.title).toBe("Hexcode");
    expect(getProjectBySlug("nonexistent")).toBeUndefined();
  });

  it("getProjectByTitle returns correct project", () => {
    const result = getProjectByTitle("Rovio");
    expect(result?.slug).toBe("rovio");
    expect(getProjectByTitle("Nonexistent")).toBeUndefined();
  });

  it("getProjectByTitle is case-insensitive", () => {
    const result = getProjectByTitle("rovio");
    expect(result?.slug).toBe("rovio");
  });
});
