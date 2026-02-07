import {test} from '@playwright/test';


test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})


   test.skip('Locator syntax rules', async ({page}) => {

    //By tag name
    await page.locator('input').first().click()
    //By id
    await page.locator('#inputEmail1').click() //Test
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
    //By xpath(NOT RECOMMENDED)
    page.locator('//input[@placeholder="Email"]')   
    //by partial text match
    page.locator(':text("Using")')
    //by exact text match
    page.locator(':text("Using the Grid")')
   })

   test('User facing Locators', async ({page}) => {
    
    await page.getByRole('textbox',{name:'Email'}).first().click()
    await page.getByRole('button',{name:'SIGN IN'}).first().click()

    //by label text
   // await page.locator('.label col-sm-3 col-form-label').click()
    //by placeholder text
    await page.getByPlaceholder('Jane Doe').click()
    //by text content    await page.getByText('Sign in').click()
    await page.getByText('Using the Grid').click()

    //By data test id
    await page.getByTestId('SignIn').click()

    //By Title  
    await page.getByTitle('IoT Dashboard').click()

   })
 

