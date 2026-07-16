import { resumeData } from "@/data/resume";

describe("Resume Data", () => {
  it("should have PT and EN versions", () => {
    expect(resumeData.pt).toBeDefined();
    expect(resumeData.en).toBeDefined();
  });

  it("should have same structure for both locales", () => {
    const ptKeys = Object.keys(resumeData.pt);
    const enKeys = Object.keys(resumeData.en);
    expect(ptKeys).toEqual(enKeys);
  });

  it("should have experience items", () => {
    expect(resumeData.pt.experience.length).toBeGreaterThan(0);
    expect(resumeData.en.experience.length).toBeGreaterThan(0);
  });

  it("should have education items", () => {
    expect(resumeData.pt.education.length).toBeGreaterThan(0);
  });

  it("should have skill groups", () => {
    expect(resumeData.pt.skillGroups.length).toBeGreaterThan(0);
    resumeData.pt.skillGroups.forEach((group) => {
      expect(group.title).toBeDefined();
      expect(group.skills.length).toBeGreaterThan(0);
    });
  });

  it("should have contact info", () => {
    expect(resumeData.pt.contact.email).toBeDefined();
    expect(resumeData.pt.contact.phone).toBeDefined();
    expect(resumeData.pt.contact.location).toBeDefined();
  });
});
