import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo.applitools.com');
    await page.getByRole('textbox', { name: 'Enter your username' }).click();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill('Raghav');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('1234');
  await page.getByRole('checkbox', { name: 'Remember Me' }).check();
  await page.getByRole('link', { name: 'Sign in' }).click();
});

test('Successful Login Test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    const text=await page.locator('.post-content').innerText();
    await expect(text).toContain('Congratulations student. You successfully logged in!');
});