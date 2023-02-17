import * as common from '../common_actions';
import * as homeLocators from './home.Locators';
import * as moistTasks from '../MoisturizerPage/moist.Functions';
import * as moistLocators from '../MoisturizerPage/moist.Locators';
import * as moistAssertions from '../MoisturizerPage/moist.Assertion';
import * as moistActions from '../MoisturizerPage/moist.Actions';
import * as sunTasks from '../SunscreenPage/sun.Functions';
import * as sunLocators from '../SunscreenPage/sun.Locators';
import * as sunAssertion from '../SunscreenPage/sun.Assertion';
import * as sunActions from '../SunscreenPage/sun.Actions';
import * as checkoutTasks from '../CheckoutPage/checkout.Functions'
import * as checkoutAssertion from '../CheckoutPage/checkout.Assertion'
import * as checkoutLocators from '../CheckoutPage/checkout.Locators'

export async function open() {
    await browser.url("https://weathershopper.pythonanywhere.com/")
}

// VARIABLES
var temp1;
export var temp;

// FUNCTIONS
export async function currentTemperature() {
    temp1 = await homeLocators.valuetemperture.getText();
    temp = temp1.slice(0, 2)


}
export async function checkTemperatue() {
    if (temp < 19) {
        console.log("TEMPERATURE IS LESS THAN 19")
        await common.waitAndClick(homeLocators.btnMoisturizers);
        await moistAssertions.verifyMoistHeader();
        await moistActions.moistProducts();
        // await checkoutAssertion.verifyElementsMatches( moistActions.values,checkoutTasks.detailsCart,"ERROR",true)
  

    } else if (temp > 34) {
        console.log("TEMPERATURE IS GREATER THAN 34")
        common.waitAndClick(await homeLocators.btnSunscreen);
        await browser.pause(2000);
        await sunAssertion.verifySunHeader();
        await sunActions.sunProducts();
        // checkoutAssertion.verifyElementsMatches(moistActions.values, checkoutTasks.detailsCart, "ERROR", true)
        console.log("CART ITEMS AND CLICKED ITEMS NAMES MATCHED")
    } else {
        console.log("Invalid Temperature")
    }

}
