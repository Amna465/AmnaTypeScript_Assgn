
import { ChainablePromiseElement } from 'webdriverio';
import * as  locators from '../MoisturizerPage/moist.Locators';

//VARIABLES:
export var moistitemsAdded;
export var listMoist;
var prices;
//VARIABLES
export var itemsaloe;

export var result;
export var detailsAloe;
export var answeraloe;

export var itemsalmond;
export let pricesAlmonds=[];
export var answeralmonds;



export async function getDetailsAloe(){
    
    itemsaloe=locators.productsDetailsAloe;
    let itemsArray= itemsaloe.map(el => el.getAttribute('onclick')); //FETCHING DETAILS OF ALOE PRODUCTS
    detailsAloe= await Promise.all(itemsArray);
    console.log(detailsAloe);

    locators.extractPrice(detailsAloe);
   
    result = prices.map(i=>Number(i));  // CONVERTING STRING TO INT ARRAY
     
    var lowestPrice=locators.sort(result); //SORTING ARRAY
    var lowestPriceIndex = lowestPrice[0]


    let addButtonForAloe = `//button[contains(@onclick, "${[lowestPriceIndex]}")]`;
    await ( $(addButtonForAloe)).waitForClickable();
    await ( $(addButtonForAloe)).click();
    answeraloe= await $(addButtonForAloe).getAttribute('onclick');
    console.log("Least expensive Aloe Product Added : ",  answeraloe )  ;
    }

export async function getDetailsAlmonds(){
     
        var highestPrice;
        itemsalmond=this.productsDetailsAlmonds;
        let itemsArray_2= itemsalmond.map(el => el.getAttribute('onclick'));
        const detailsAlmonds = await Promise.all(itemsArray_2);
        console.log(detailsAlmonds);

        locators.extractPrice(detailsAlmonds);

       
         let resultAlmonds = pricesAlmonds.map(i=>Number(i));  // CONVERTING STRING TO INT ARRAY
         
         highestPrice=locators.sort(resultAlmonds); 
         highestPrice=highestPrice.reverse(); //SORTING ARRAY IN DESCENDING ORDER
         var highestPriceIndex = highestPrice[0];

         let addButtonForAlmond = `//button[contains(@onclick, "${[highestPriceIndex]}")]`;
      
         await (await $(addButtonForAlmond)).waitForClickable();
         await (await $(addButtonForAlmond)).click();
         answeralmonds= await $(addButtonForAlmond).getAttribute('onclick');
         console.log("Most expensive Almond Product Added: ",answeralmonds);
    }

//console.log(locators.answeraloe, locators.answeralmonds);
       listMoist= [answeraloe, answeralmonds];
       moistitemsAdded= locators.extractNames(listMoist)                
       console.log("ITEMS CLICKED",  moistitemsAdded);
  
       locators.cartBtn.click();

       