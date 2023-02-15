//import * as  tasksMoist from '../MoisturizerPage/tasks';
import * as  locators from '../CheckoutPage/checkout.Locators';
import * as  common from '../common_functions';
import * as  homeTasks from '../HomePage/home.Tasks';

import * as commonAssertion from '../../pageobjects/common_assertions'

//variable:
 export var detailsCart;


 //FUNCTIONS

export async function getValuesCart() 
{

     let itemsCart: any = await browser.$$(locators.tableValue_1).map(elem => elem.getText()); //FETCHING DETAILS OF ALOE PRODUCTS
         detailsCart= await Promise.all(itemsCart);
        console.log(detailsCart);
      console.log("CART ITEMS:" ,detailsCart) 
}//Printing names of items in cart}




export async function payBtn(){
    await commonAssertion.verifyElementIsClickable(await locators.paywithcardBtn, "error", true)  
    await common.waitAndClick(await locators.paywithcardBtn)
  }

export async function giveInput(){
        //   iFrame= await locators.Frame;      
        //   browser.pause(5000);
          await browser.switchToFrame(await $(".stripe_checkout_app"));
         
          
        //ENTERING INPUT IN EMAIL FIELD
          await  common.waitAndClick(locators.inputEmail);
          await locators.inputEmail.setValue('test@gmail.com');
          await browser.pause(5000);

        //ENTERING INPUT IN CARD FIELD
          
          await common.waitAndClick ( locators.inputCardNumber);
           for(let i=0; i<4; i++){
            await browser.keys('4');  //4
            await browser.keys ('2'); //2
            await browser.keys('4');  //4
            await browser.keys ('2'); //2
           }

            //ENTERING INPUT IN DATE FIELD
          await  common.waitAndClick( locators.inputDate);
          await browser.keys('\uE01A');  //0
          await browser.keys ('\uE01D'); //3
          await browser.keys('\uE01C'); //2
          await browser.keys ('\uE01F'); //5

           //ENTERING INPUT IN CVC FIELD
            await  common.waitAndClick( locators.inputCVC);
             await browser.keys('\uE01B') 
             await browser.keys('\uE023') 
             await browser.keys('\uE023') //input:199
             await browser.pause(2000);         


         //ENTERING INPUT IN zipcode FIELD
         await  common.waitAndClick( locators.inputZipCode);
         await browser.keys('\uE01B') 
          await browser.keys('\uE023') 
          await browser.keys('\uE023') 
        
         await browser.switchToParentFrame();
     }

   export async function makePayment(){
    
    await browser.switchToFrame(await $(".stripe_checkout_app"));
    await commonAssertion.verifyElementIsClickable(await locators.payBtn, "error", true)
    await  common.waitAndClick(await locators.payBtn);
    console.log("PAYMENT DONE")
    await browser.pause(3000);
    await browser.switchToParentFrame();
    }


    


