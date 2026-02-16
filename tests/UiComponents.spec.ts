import {test,expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
})

test.describe('UI Components', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })
 



test.skip('input fields', async ({page}) => {

    const emailInput=await page.locator('nb-card').filter({hasText :'Using the Grid'}).getByRole('textbox',{name:'Email'})
    
    await emailInput.fill('test@test.com') 
    await emailInput.clear()
    await emailInput.pressSequentially('test2@test.com',{delay:100}) //This will simulate typing the text "


    //Genric Assertion
    const emailValueText= await emailInput.inputValue() //This will return the current value of the input field as a string. If the input field is empty, it will return an empty string.
    expect(emailValueText).toEqual('test2@test.com')
   // console.log(emailValueText)

   //locator assertion
   await expect(emailInput).toHaveValue('test2@test.com')
   }) 


   test.skip('radio buttons', async ({page}) => {

    const usingTheGridForm=page.locator('nb-card').filter({hasText :'Using the Grid'})

    //await usingTheGridForm.getByLabel("Option 1").check({force:true})
    await usingTheGridForm.getByRole('radio',{name:'Option 1'}).check({force:true})
    const option2RadiooButton=await usingTheGridForm.getByRole('radio',{name:'Option 1'}).isChecked()
    expect(option2RadiooButton).toBeTruthy()
    await expect(usingTheGridForm.getByRole('radio',{name:'Option 1'})).toBeChecked()

    await usingTheGridForm.getByRole('radio',{name:'Option 2'}).isChecked()
    expect(await usingTheGridForm.getByRole('radio',{name:'Option 2'}).isChecked()).toBeFalsy()
    expect(await usingTheGridForm.getByRole('radio',{name:'Option 1'}).isChecked()).toBeTruthy()

   })


})

test('checkboxes', async ({page})=>{
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    await page.getByRole('checkbox',{name:'Hide on click'}).check({force:true})
    await page.getByRole('checkbox',{name:'Prevent arising of duplicate toast'}).check({force:true})


    const allcheckboxes=page.getByRole('checkbox')

    for(const box of await allcheckboxes.all()){
        await box.uncheck({force:true})
        expect(await box.isChecked()).toBeFalsy()

        await box.check({force:true})
        expect(await box.isChecked()).toBeTruthy()
        
    }
})





