import { test, expect } from '@playwright/test';

test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('div.greetings > h1')).toHaveText('Make Shopping great again!');
  await page.getByRole('link', { name: 'Healthy food', exact: true }).click();
  await page.getByRole('row', { name: 'Whole Grains Wheat add' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Shopping List' }).click();
  await page.getByPlaceholder('Add product').click();
  await page.getByPlaceholder('Add product').fill('apple');
  await page.getByPlaceholder('Add product').press('Enter');
  await page.getByPlaceholder('Add product').click();
  await page.getByPlaceholder('Add product').fill('banana');
  await page.getByPlaceholder('Add product').press('Enter');
  await page.locator('li').filter({ hasText: 'banana' }).getByRole('img').click();
  await page.getByRole('link', { name: 'healthy food', exact: true }).click();
  await page.getByPlaceholder('Search product...').fill('or');
  await page.getByRole('cell', { name: 'Oranges' }).click();
  await page.getByPlaceholder('Search product...').click();
});