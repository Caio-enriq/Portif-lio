import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("should load home page", async ({ page }) => {
    await page.goto("/pt");
    await expect(page).toHaveTitle(/Caio Enrique/);
  });

  test("should display hero section", async ({ page }) => {
    await page.goto("/pt");
    await expect(page.getByRole("heading", { name: "Caio Enrique", exact: true })).toBeVisible();
  });

  test("should navigate to projects", async ({ page }) => {
    await page.goto("/pt");
    await page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Projetos", exact: true })
      .click();
    await expect(page).toHaveURL(/projetos/);
  });

  test("should toggle theme", async ({ page }) => {
    await page.goto("/pt");
    const themeButton = page.getByRole("button", { name: /alternar tema/i });
    await themeButton.click();
    await expect(page.locator("html")).toHaveClass(/light/);
  });
});

test.describe("Projects page", () => {
  test("should display project cards", async ({ page }) => {
    await page.goto("/pt/projetos");
    await expect(page.getByRole("heading", { name: "Projetos", exact: true })).toBeVisible();
  });

  test("should filter projects", async ({ page }) => {
    await page.goto("/pt/projetos");
    const fullStackFilter = page.getByRole("button", { name: /^Full-stack$/ });
    await fullStackFilter.click();
    await expect(fullStackFilter).toHaveClass(/pointer-events-none/);
  });
});

test.describe("Navigation", () => {
  test("should navigate between pages", async ({ page }) => {
    await page.goto("/pt");
    const nav = page.getByRole("navigation", { name: "Navegação principal" });

    await nav.getByRole("link", { name: "Sobre", exact: true }).click();
    await expect(page).toHaveURL(/sobre/);
    await nav.getByRole("link", { name: "Currículo", exact: true }).click();
    await expect(page).toHaveURL(/curriculo/);
    await nav.getByRole("link", { name: "Contato", exact: true }).click();
    await expect(page).toHaveURL(/contato/);
  });

  test("should switch locale", async ({ page }) => {
    await page.goto("/pt");
    const langButton = page.getByRole("button", { name: /alterar idioma/i });
    await langButton.click();
    await expect(page).toHaveURL(/\/en/);
  });
});
