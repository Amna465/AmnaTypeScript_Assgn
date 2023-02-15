import * as homePageTasks from "../../pageobjects/HomePage/home.Tasks";
import * as homePageAssert from "../../pageobjects/HomePage/home.Asertion";


import { Given, When, Then } from '@wdio/cucumber-framework';

// import LoginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page';



Given('I am on the home page', async () => {
    await homePageTasks.open()
});

When('I can see temperature', async () => {
    await homePageTasks.currentTemperature();
    console.log(homePageAssert.verifyhomeHeader);
    console.log(homePageAssert.verifyTemperature)
  
});

Then('Products are displayed according to the temperature', async () => {
  // Write code here that turns the phrase above into concrete actions
   await homePageTasks.checkTemperatue();  
})

