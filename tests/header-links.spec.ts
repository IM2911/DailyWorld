import { test, expect } from '@playwright/test';

test('Verify Home and DailyWorld links in Header', async ({ page }) => {
  await page.goto('http://localhost:3002/calculators');

  // Click on "Home" link
  await page.click('nav a:has-text("Home")');
  await expect(page).toHaveURL('http://localhost:3002/');

  // Go back to calculators
  await page.goto('http://localhost:3002/calculators');

  // Click on "DailyWorld" logo
  await page.click('header a:has-text("DailyWorld")');
  await expect(page).toHaveURL('http://localhost:3002/');
});
