 import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

 import { test, expect } from '@playwright/test';

 test('test', async ({ page }) => {
   await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dgoog%26oq%3Dgoog%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBBzY0NGowajKoAgCwAgE%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D59sIaMHxM9CA9u8Povbg0Q0&q=EgQlQGZmGOi3o8AGIjD2mEqU94tZRjL_0TA69p0ZTKabAQUBueNyq0U3VfNabvCeo_TNJBQS6g0O5R0JtFAyAnJSWgFD');
   await page.locator('iframe[name="a-drhxp53ff8b5"]').contentFrame().getByRole('checkbox', { name: 'Je ne suis pas un robot' }).click();
   await page.locator('iframe[name="c-drhxp53ff8b5"]').contentFrame().locator('td:nth-child(3)').first().click();
   await page.locator('iframe[name="c-drhxp53ff8b5"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
   await page.locator('iframe[name="c-drhxp53ff8b5"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
   await page.locator('iframe[name="c-drhxp53ff8b5"]').contentFrame().getByRole('button', { name: 'Valider' }).click();
   await page.getByRole('button', { name: 'Tout accepter' }).click();
   await page.getByRole('link', { name: 'Google Google https://www.google.fr' }).click();
   await page.getByRole('button', { name: 'Tout accepter' }).click();
   await page.getByRole('combobox', { name: 'Rech.' }).click();
 });