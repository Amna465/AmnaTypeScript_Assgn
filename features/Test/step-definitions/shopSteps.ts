import * as homePageTasks from "../../pageobjects/HomePage/home.Tasks";
import * as homePageLocators from "../../pageobjects/HomePage/home.Locators";
import * as homePageAssert from "../../pageobjects/HomePage/home.Asertion";
import * as checkoutTasks from '../../pageobjects/CheckoutPage/checkout.Tasks'
import * as checkoutLocators from '../../pageobjects/CheckoutPage/checkout.Locators'
import * as checkoutAssertions from '../../pageobjects/CheckoutPage/checkout.Assertion'
import * as commonAssertion from '../../pageobjects/common_assertions'


import { Given, When, Then } from '@wdio/cucumber-framework';



Given('I am on the home page', async () => {
    await homePageTasks.open()
});

 When('I can see temperature', async () => {
    await homePageTasks.currentTemperature();
    await browser.pause(2000);
    await homePageAssert.verifyText();
    await commonAssertion.verifyElementIsDisplayed(homePageLocators.Header, " Error", true)
  
 });

Then('Products are purchased according to the temperature', async () => {
  // Write code here that turns the phrase above into concrete actions
   await homePageTasks.checkTemperatue();  
})



// When('Cart items and clicked items names are same', () => {
//   console.log("when statement")
//   //checkoutAssertions.verifyElementsMatches()
// })
Then('I can proceed to payment', async () => {
    // Write code here that turns the phrase above into concrete actions
                  
            await checkoutTasks.payBtn();
            await checkoutTasks.giveInput();
            await checkoutTasks.makePayment()
            
  })

