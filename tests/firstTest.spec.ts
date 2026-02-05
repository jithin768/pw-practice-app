import {test} from '@playwright/test'


test('first test',({page})=>{
    page.goto('http://localhost:4200')

})

/*
test.describe('test suite one',()=>{
    console.log('first test')

    test('first test',()=>{
    console.log('first test')

})

test('first test',()=>{
    console.log('first test')

})

})
*/

