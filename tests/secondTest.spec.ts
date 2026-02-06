import {test} from '@playwright/test';


test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})


   test('Locator syntax rules', async ({page}) => {

    //By tag name
    page.locator('input')  
    //By id
    page.locator('#inputEmail1')
    //By class name
    page.locator('.input-full-width')
    //By attribute name
    page.locator('[placeholder="Email"]')
    //By attribute name and value
    page.locator('[placeholder="Email"][type="email"]') 
    //By class value
    page.locator('[class="input-full-width size-medium shape-rectangle"]')
    //By tag name and attribute with value
    page.locator('input[placeholder="Email"]')
    //By tag name, attribute with value and class value
    page.locator('input[placeholder="Email"].input-full-width')

   })

 

