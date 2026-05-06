import {test, expect} from '@playwright/test';
test.describe("Hooks and Groups", () => {

test.beforeEach("login test", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').type("standard_user");
    await page.locator('[data-test="password"]').click
    await page.locator('[data-test="password"]').type("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator('.title')).toHaveText("Products");
    await page.pause();
}
);
test("add to cart test", async ({page}) => {
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});

test("logout test", async ({page}) => {
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
});
test.afterAll(async ({page}) => {
    await page.close();
});

});