import {test, expect} from '@playwright/test';
import { execPath } from 'node:process';

test('Assertions', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/');
    //Assertions
    //Check element is present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1); 
    //Returns true or false if element is present or not but only use when you want to perform some action on element if it is present
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click();

    }
    await expect(page.locator('text=The Kitchen')).toBeVisible(); //Check element is visible or not
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden();  //Check element is hidden or not
    await expect(page.locator('text=The Kitchen')).toBeEnabled(); //Check element is enabled or not
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled(); //Check element is disabled or not
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a' ) //Check element has attribute or not
    
})
test('Check Page URL', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/');
    await expect(page).toHaveURL('https://kitchen.applitools.com/');    
    await expect(page).toHaveScreenshot

})

