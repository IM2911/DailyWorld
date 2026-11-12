import { test, expect } from '@playwright/test';

test.describe('DailyWorld Redesign Checks', () => {
  test('Homepage renders correctly', async ({ page }) => {
    await page.goto('http://localhost:3002/');
    await expect(page.locator('h1')).toContainText('Take Control of Your Energy Costs');
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('Calculators page renders correctly', async ({ page }) => {
    await page.goto('http://localhost:3002/calculators');
    await expect(page.locator('h1')).toContainText('All Calculators');
  });

  test('Guides page renders correctly', async ({ page }) => {
    await page.goto('http://localhost:3002/guides');
    await expect(page.locator('h1')).toContainText('Energy Guides');
  });

  test('Single Guide page loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3002/guides/how-much-electricity-does-a-refrigerator-use');
    await expect(page.locator('h1')).toContainText('How Much Electricity Does a Refrigerator Use?');
  });

  test('Single Calculator page loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3002/calculators/electricity-cost');
    await expect(page.locator('h1')).toContainText('Electricity Cost Calculator');
  });
});
