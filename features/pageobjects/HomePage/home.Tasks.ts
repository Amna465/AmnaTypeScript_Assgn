import * as  common from '../common_functions';
import * as  homeLocators from './home.Locators';
import * as moistTasks from '../MoisturizerPage/moist.Tasks';
import * as moistLocators from '../MoisturizerPage/moist.Locators';
import * as moistAssertions from '../MoisturizerPage/moist.Assertion';
import * as sunTasks from '../SunscreenPage/sun.Tasks';
import * as sunLocators from '../SunscreenPage/sun.Locators';
import * as sunAssertion from '../SunscreenPage/sun.Assertion';
import * as checkoutTasks from '../CheckoutPage/checkout.Tasks'
import * as checkoutAssertion from '../CheckoutPage/checkout.Assertion'
import * as checkoutLocators from '../CheckoutPage/checkout.Locators'

export async function open (){
   await browser.url("https://weathershopper.pythonanywhere.com/")
}

//VARIABLES
var temp1;
export var temp;

//FUNCTIONS
export async function currentTemperature(){
     temp1= await homeLocators.valuetemperture.getText();
     temp =temp1.slice(0,2) 

}
 export async function checkTemperatue(){
     if (temp < 19){   
        console.log("TEMPERATURE IS LESS THAN 19")
        await common.waitAndClick (await homeLocators.btnMoisturizers);
        await moistAssertions.verifyMoistHeader();
        await moistTasks.getDetailsAloe();
        await moistTasks.getDetailsAlmonds();
        var values= await moistTasks.getClickedItemsNames();
        await common.waitAndClick( moistLocators.cartBtn);
        await checkoutTasks.getValuesCart();
        await checkoutAssertion.verifyElementsMatches( values,checkoutTasks.detailsCart,"ERROR",true)
        console.log("CART ITEMS AND CLICKED ITEMS NAMES MATCHED")

        
      //   await checkoutTasks.payBtn();
      //   console.log("done")
      //   await checkoutTasks.giveInput();
      //   await checkoutTasks.makePayment();
        //await checkoutAssertion.matchValuesMoist();
         
}
        
        else if (temp > 34){
            console.log("TEMPERATURE IS GREATER THAN 34")
            common.waitAndClick (await homeLocators.btnSunscreen);
            await browser.pause(2000);
            await sunAssertion.verifySunHeader();
            await sunTasks.getDetails_SPF50();
            await sunTasks.getDetails_SPF30();
            var values= await sunTasks.getClickedItemsNames();
            await common.waitAndClick( sunLocators.cartBtn);
            await checkoutTasks.getValuesCart();
            await checkoutAssertion.verifyElementsMatches(values,checkoutTasks.detailsCart,"ERROR",true)
            console.log("CART ITEMS AND CLICKED ITEMS NAMES MATCHED")
            
            //await checkoutAssertion.matchValuesSunscreen();

            }
       else {
           console.log("Invalid Temperature")
       }

 }
