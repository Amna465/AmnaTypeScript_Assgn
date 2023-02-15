import * as  common from '../common_functions';
import * as  homeLocators from './home.Locators';
import * as moistTasks from '../MoisturizerPage/moist.Tasks';
import * as moistLocators from '../MoisturizerPage/moist.Locators';
import * as sunTasks from '../SunscreenPage/sun.Tasks';
import * as sunLocators from '../SunscreenPage/sun.Locators';
import * as checkoutTasks from '../CheckoutPage/checkout.Tasks'
import * as checkoutAssertion from '../CheckoutPage/checkout.Assertion'

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
        await moistTasks.getDetailsAloe();
        await moistTasks.getDetailsAlmonds();
        await common.waitAndClick (await moistLocators.cartBtn);
        await (await checkoutTasks.getValuesCart())
        await(await checkoutAssertion.matchValuesMoist());
       }
        
        else if (temp > 34){
           console.log("TEMPERATURE IS GREATER THAN 34")
           await common.waitAndClick (await homeLocators.btnSunscreen);
           await sunTasks.getDetails_SPF50();
           await sunTasks.getDetails_SPF30();
           await common.waitAndClick (await sunLocators.cartBtn);
           await ( await checkoutTasks.getValuesCart());
           await( await checkoutAssertion.matchValuesSunscreen());
           }
       else {
           console.log("Invalid Temperature")
       }

}
