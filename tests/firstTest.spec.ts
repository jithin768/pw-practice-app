import {test} from '@playwright/test';


test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
})
/*
   test('navigate to Echarts', async ({page}) => {
    await page.getByText('Charts').click()
    await page.getByText('Echarts').click()
})*/

//test.describe('First Test Suite', () => {
   /* test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click()
    })*/


    test.skip('Navigate to Forms',async ({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        await page.getByText('Datepicker').click()
    })
//}) 


//test.describe('First second Suite', () => {
    
    test.skip('navigate to Charts', async ({page}) => {
        await page.getByText('Auth').click()
        await page.getByText('Login').click()
    })
//}) 

 

