
import { ChainablePromiseElement } from 'webdriverio';
import * as  locators from '../MoisturizerPage/moist.Locators';
import * as  common from '../common_functions';

//VARIABLES:
export var moistItemsAdded;
export var listMoist;
var prices;

 export var answeraloe;

 export var answeralmonds;

 //FUNCTIONS

export async function getDetailsAloe(){
    
           var pricesAloe: any=[];
  
        let itemsArray: any = await browser.$$(locators.productsDetailsAloe).map(elem => elem.getAttribute('onclick')); //FETCHING DETAILS OF ALOE PRODUCTS
        var detailsAloe= await Promise.all(itemsArray);
        console.log(detailsAloe);
 
         pricesAloe= await common.extractPrice(detailsAloe)
         let result = pricesAloe.map(i=>Number(i));  // CONVERTING STRING TO INT ARRAY
         
         var lowestPrice=await common.sort(result);
         var lowestPriceIndex = lowestPrice[0];
         console.log(lowestPriceIndex);

         let addButtonForAloe = `//button[contains(@onclick, "${[lowestPriceIndex]}")]`;
         await ( $(addButtonForAloe)).waitForClickable();
         await ( $(addButtonForAloe)).click();
          answeraloe= await $(addButtonForAloe).getAttribute('onclick');
         (console.log("Aloe Product Added", answeraloe));
}

export async function getDetailsAlmonds(){
    var pricesAlmonds: any=[];
  
    let itemsArrayAlmonds: any = await browser.$$(locators.productsDetailsAlmonds).map(elem => elem.getAttribute('onclick')); //FETCHING DETAILS OF ALOE PRODUCTS
    var detailsAlmonds= await Promise.all(itemsArrayAlmonds);
    console.log(detailsAlmonds);

    pricesAlmonds=await common.extractPrice(detailsAlmonds);
   
    
    // for (let i=0; i<detailsAlmonds.length; i++){      //EXTRACTING PRICES
    //     let a = detailsAlmonds[i].split(',')[1].split(')')[0];
    //     pricesAlmonds.push(a);
    //  }
     let resultAlmonds = await pricesAlmonds.map(i=>Number(i));  // CONVERTING STRING TO INT ARRAY
     
    
     //var highestPrice=resultAlmonds.sort(function(a, b){return a - b}); //SORTING ARRAY
     var highestPrice= await common.sort(resultAlmonds)
     highestPrice=highestPrice.reverse()
     var highestPriceIndex = highestPrice[0];
     let addButtonForAlmond = `//button[contains(@onclick, "${[highestPriceIndex]}")]`;
  
     await (await $(addButtonForAlmond)).waitForClickable();
     await (await $(addButtonForAlmond)).click();
      answeralmonds= await $(addButtonForAlmond).getAttribute('onclick');
     await console.log("Almond Product Added: ",await answeralmonds);
}


export async function getClickedItemsNames(){
    var str= [answeraloe, answeralmonds];
    ( console.log( "LIST MOISTURIZER:",str));
    moistItemsAdded=  common.extractNames(str);
    return moistItemsAdded;
}

          


       