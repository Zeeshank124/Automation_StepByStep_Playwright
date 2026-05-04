import {test, expect} from '@playwright/test';
test('Add Item to Cart', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    //using any object property
    await page.click('id=user-name');
    await page.fill('id=user-name', 'standard_user');
    await page.click('id=password');
    await page.fill('id=password','secret_sauce');
    //using css selector
    await page.locator('#login-button').click();
    //using xpath selector
    //await page.locator('//input[@id="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('id=add-to-cart-sauce-labs-backpack').click();
    console.log(await page.locator('[data-test="shopping-cart-badge"]').textContent())
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
})