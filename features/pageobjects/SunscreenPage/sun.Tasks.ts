import { ChainablePromiseElement } from 'webdriverio';
import * as  locators from '../SunscreenPage/sun.Locators';
import * as  locatorsMoist from '../MoisturizerPage/moist.Locators';
import * as  common from '../common_functions';

//VARIABLES
export var answerSPF30;
export var answerSPF50;
export var sunItemsAdded;


//FUNCTIONS
export async function getDetails_SPF50(){
    // var items_SPF50=[];
     var prices50:any=[];

    let itemsArray: any = await browser.$$(locators.productsDetails_SPF50).map(elem => elem.getAttribute('onclick')); //FETCHING DETAILS OF ALOE PRODUCTS
    var detailsSPF50= await Promise.all(itemsArray);
    console.log(detailsSPF50);
    
        prices50= await common.extractPrice(detailsSPF50)
        let result50 = prices50.map(i=>Number(i))
        

        var lowestPrice=await common.sort(result50);
        var lowestPriceIndex = lowestPrice[0];
        console.log(lowestPriceIndex);

        let addButtonForSPF50= `//button[contains(@onclick, "${[lowestPriceIndex]}")]`;
        await (await $(addButtonForSPF50)).waitForClickable();
        await (await $(addButtonForSPF50)).click();
         answerSPF50= await $(addButtonForSPF50).getAttribute('onclick');
        (console.log("SPF-50 Product Added", await answerSPF50));
}


export async function getDetails_SPF30(){
    var prices30:any=[];

    let itemsArray30: any = await browser.$$(locators.productsDetails_SPF30).map(elem => elem.getAttribute('onclick')); //FETCHING DETAILS OF ALOE PRODUCTS
    var detailsSPF30= await Promise.all(itemsArray30);
    console.log(detailsSPF30);

    prices30=await common.extractPrice(detailsSPF30);

     let resultAlmonds = await prices30.map(i=>Number(i));  
     let result30 = await prices30.map(i=>Number(i));  // CONVERTING STRING TO INT ARRAY
    
     var highestPrice= await common.sort(result30)
     highestPrice=await highestPrice.reverse()
     var highestPriceIndex = highestPrice[0];
   

     let addButtonForSPF30 = `//button[contains(@onclick, "${[highestPriceIndex]}")]`;
     await (await $(addButtonForSPF30)).waitForClickable();
     await (await $(addButtonForSPF30)).click();
     answerSPF30= await $(addButtonForSPF30).getAttribute('onclick');
     (console.log("SPF 30 Product Added", answerSPF30))

}


export async function getClickedItemsNames(){
   var str= [answerSPF50, answerSPF30];
    ( console.log( "LIST SUNSCREEN:",str));
    sunItemsAdded=  common.extractNames(str);
    return sunItemsAdded;
}


   


    