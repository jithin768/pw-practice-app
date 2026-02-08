import {test,expect} from '@playwright/test';


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

   test.skip('User facing Locators', async ({page}) => {
    
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

   test.skip('Child Element Locators', async ({page}) => {

    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button',{name:'SIGN IN '}).first().click()

   })

   test.skip('Locating Parent Elemnts',async({page})=>{

    await page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox',{name:'Email'}).click()
    await page.locator('nb-card',{has:page.locator('#inputEmail1')}).getByRole('textbox',{name:'Email'}).click()


    await page.locator('nb-card').filter({hasText:'Basic form'}).getByRole('textbox',{name:'Email'}).click()
    await page.locator('nb-card').filter({has:page.locator('.status-danger')}).getByRole('textbox',{name:'Password'}).click()

    await page.locator('nb-card').filter({has:page.locator('nb-checkbox')}).filter({hasText:'Sign in'}).getByRole('textbox',{name:'Email'}).click()

    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('button',{name:'SIGN IN '}).click()
   })

   test('Reusing Locators',async({page})=>{

    const vbasicForm = page.locator('nb-card').filter({hasText:'Basic form'})
    const email = vbasicForm.getByRole('textbox',{name:'Email'})
    const password = vbasicForm.getByRole('textbox',{name:'Password'})
    const checkBox = vbasicForm.filter({hasText:'Check me out'}).locator('nb-checkbox')
    const signInButton = vbasicForm.getByRole('button',{name:'SUBMIT'})   

    await email.fill('test@test.com')
    await password.fill('Welcome123')
    await checkBox.click()
    await signInButton.click()

    await expect(email).toHaveValue('test@test.com')


   })



 

