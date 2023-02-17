import * as homePageTasks from "../../pageobjects/HomePage/home.Tasks";
import * as homePageLocators from "../../pageobjects/HomePage/home.Locators";
import * as homePageAssert from "../../pageobjects/HomePage/home.Asertion";
import * as checkoutAction from '../../pageobjects/CheckoutPage/checkout.Actions'
import * as checkoutLocators from '../../pageobjects/CheckoutPage/checkout.Locators'
import * as checkoutFuncs from '../../pageobjects/CheckoutPage/checkout.Functions'
import * as checkoutAssertions from '../../pageobjects/CheckoutPage/checkout.Assertion'
import * as commonAssertion from '../../pageobjects/common_assertions'


import {Given, When, Then} from '@wdio/cucumber-framework';


Given('I am on the home page', async () => {
    await homePageTasks.open()
});

When('I can see temperature', async () => {
    await homePageTasks.currentTemperature();
    await browser.pause(2000);
    await homePageAssert.verifyText();
    await commonAssertion.verifyElementIsDisplayed(homePageLocators.Header, " Error", true)

});

Then('Products are purchased according to the temperature', async () => { // Write code here that turns the phrase above into concrete actions
    await homePageTasks.checkTemperatue();
})



Given('Cart values and clicked items values matched', async() => { // Write code here that turns the phrase above into concrete actions
    await checkoutAction.matchValues();
    console.log("CART ITEMS AND CLICKED ITEMS NAMES MATCHED")
})
When('I can fill the checkout form', async () => { // Write code here that turns the phrase above into concrete actions
    await checkoutAction.Checkout();
})
Then('Payment is successful', async () => { // Write code here that turns the phrase above into concrete actions
    await checkoutFuncs.makePayment();
    console.log("PAYMENT COMPLETED SUCESSFULLY")
})
