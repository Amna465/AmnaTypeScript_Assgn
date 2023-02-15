//import * as  tasksMoist from '../MoisturizerPage/tasks';
import * as  locators from '../CheckoutPage/checkout.Locators';
import * as  common from '../common_functions';
import * as  homeTasks from '../HomePage/home.Tasks';

//variable:
export var listCart;

//export var itemsText: string[] = [];
var iFrame= locators.Frame;



export async function getValuesCart() 
{
  for (let i=0; i<2; i++){
  var itemsText= await( await (locators.tableValue_1)[i].getText());
  listCart.push(itemsText)
} 
console.log("CART ITEMS:" ,listCart) 
}//Printing names of items in cart}




export async function payBtn(){
    await common.waitAndClick(await locators.paywithcardBtn)
    console.log("HOGYA HAI CLICK");
  }

export async function giveInput(){
        //   iFrame= await locators.Frame;      
        //   browser.pause(5000);
          browser.switchToFrame(iFrame);
         
          
        //ENTERING INPUT IN EMAIL FIELD
          await  common.waitAndClick(locators.inputEmail);
          await locators.inputEmail.setValue('test@gmail.com');
          browser.pause(5000);

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
             browser.pause(2000);         


         //ENTERING INPUT IN zipcode FIELD
         await  common.waitAndClick( locators.inputZipCode);
         await browser.keys('\uE01B') 
          await browser.keys('\uE023') 
          await browser.keys('\uE023') 
        
         browser.switchToParentFrame();
     }

   export async function makePayment(){
      
    await browser.switchToFrame(iFrame);
    await  common.waitAndClick(await locators.payBtn);
    console.log("PAYMENT DONE")
    browser.pause(3000);
    browser.switchToParentFrame();
    }


    


