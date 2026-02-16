import {test,expect} from '@playwright/test';


test.beforeEach(async ({page},testInfo) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
    testInfo.setTimeout(testInfo.timeout+2000) 
})

    test.skip('Auto Waiting', async ({page}) => {

        const successButton= page.locator('.bg-success')

        //await successButton.click()

        //await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:20000})

        //const textcnt= await successButton.textContent() //in this case textContent will wait for the element to be visible and have text content before returning the value. If the element does not become visible or does not have text content within the default timeout, it will throw an error.
       // await successButton.waitFor({state:"visible"}) //waits for the element to be visible on the page. It will throw an error if the element does not become visible within the default timeout.
        //await successButton.waitFor({state:"hidden"}) //waits for the element to be hidden or removed from the page. It will throw an error if the element does not become hidden within the default timeout.
        //await successButton.waitFor({state:"detached"}) //waits for the element to be removed from the DOM. It will throw an error if the element does not become detached within the default timeout.
       //await successButton.waitFor({state:"attached"}) //waits for the element to be present in the DOM, regardless of its visibility. It will not throw an error if the element is not visible, but it will throw an error if the element does not become attached to the DOM within the default timeout.

        //const textcnt= await successButton.allTextContents()

       // expect(textcnt).toContain('Data loaded with AJAX get request.')
       await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:20000})

    })

    test.skip("Alternative Option to wait for element to be visible",async({page})=>{
            const successButton= page.locator('.bg-success')
    
        //1. Wait for the element to be visible using waitForSelector
        //await page.waitForSelector('.bg-success')
        //2. Wait for the element to be visible using waitForResponse
        //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

        await page.waitForLoadState('networkidle') //3. waits for the network to be idle, meaning that there are no ongoing network requests. This can be useful when you want to ensure that all AJAX requests have completed before proceeding with the test.


        const text= await successButton.allTextContents()

       expect(text).toContain('Data loaded with AJAX get request.')

    })

     test.skip('Timeouts', async ({page}) => {

        //test.setTimeout(20000) //This will set the timeout for the entire test to 20 seconds, allowing all actions within the test to wait up to that amount of time before throwing a timeout error.
        test.slow() //This will slow down the execution of the test by adding a delay of 5 seconds between each action. This can be useful for debugging purposes or to simulate slower user interactions.
        const successButton= page.locator('.bg-success')

        await successButton.click({timeout:16000}) //This will override the default timeout for this specific action, allowing it to wait up to 3 seconds for the click action to be successful. If the element does not become clickable within that time frame, it will throw an error.

     })