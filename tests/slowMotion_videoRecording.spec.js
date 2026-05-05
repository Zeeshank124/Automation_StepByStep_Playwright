import { test, expect,chromium } from '@playwright/test';

test('Slow Motion Video Recording', async () => {
    //Creating Isolated Browser Context
    const browser = await chromium.launch({
        slowMo: 500, //500 millisecond delay between each action
        headless: false, //to see the browser actions
    }
    )
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/', //directory to save videos
            size: {
                width: 800,
                height: 600
            }
        }
    })
    const page = await context.newPage()
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    const text = await page.locator('.post-content').innerText();
    await expect(text).toContain('Congratulations student. You successfully logged in!');
    await page.close();
    await browser.close();

})