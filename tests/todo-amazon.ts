import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('testing');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');

// This is my new change//
  
  await page.getByRole('combobox', { name: 'Search' }).click();
  
  await page.getByRole('combobox', { name: 'Search' }).click();
  
  await page.getByRole('combobox', { name: 'Search' }).click();
  
  await page.getByRole('combobox', { name: 'Search' }).click();


  donr

  donebbe

  myside

  Ankit Mishra

  78965;

  panday;
  
});


