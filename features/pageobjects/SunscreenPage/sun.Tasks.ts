import { ChainablePromiseElement } from 'webdriverio';
import * as  locators from '../SunscreenPage/sun.Locators';
import * as  locatorsMoist from '../MoisturizerPage/moist.Locators';

//VARIABLES
//export var items_SPF50=[];
var prices50;
export var items_SPF50;
export var detailsSPF50;


var items_SPF30;
let prices30;

var answerSPF30;
var answerSPF50;

export var sunItemsAdded;


//FUNCTIONS

export async function getDetails_SPF50(){
   
    items_SPF50 =locators.productsDetails_SPF50;
    let itemsArray= await items_SPF50.map(el => el.getAttribute('onclick')); //FETCHING DETAILS OF spf-50 PRODUCTS
    detailsSPF50= await Promise.all(itemsArray);
    console.log(detailsSPF50);

    prices50=locatorsMoist.extractPrice(detailsSPF50)

    let result50 = prices50.map(i=>Number(i));  // CONVERTING STRING TO INT ARRAY
    var resultSPF50Sorted=locatorsMoist.sort(result50)
    var lowestPriceIndex = resultSPF50Sorted[0]

    let addButtonForSPF50= `//button[contains(@onclick, "${[lowestPriceIndex]}")]`;
    await (await $(addButtonForSPF50)).waitForClickable();
    await (await $(addButtonForSPF50)).click();
    answerSPF50= await $(addButtonForSPF50).getAttribute('onclick');
    console.log("SPF-50 Product Added" , answerSPF50 ); 
     
     }
 export async function getDetails_SPF30(){

    items_SPF30=locators.productsDetails_SPF30;
    let itemsArray_2= await items_SPF30.map(el => el.getAttribute('onclick'));
    const detailsSPF30 = await Promise.all(itemsArray_2);
    console.log(detailsSPF30);

    prices30=locatorsMoist.extractPrice(detailsSPF30);

    for (let i=0; i<detailsSPF30.length; i++){      //EXTRACTING PRICES
        let a = detailsSPF30[i].split(',')[1].split(')')[0];
        prices30.push(a);
     }
     let result30 = prices30.map(i=>Number(i));  // CONVERTING STRING TO INT ARRAY
     var resultSPF30Sorted=locatorsMoist.sort(result30) //sorting prices in ascending order
     var lowestPriceIndex = resultSPF30Sorted[0] 
    

     let addButtonForSPF30 = `//button[contains(@onclick, "${[lowestPriceIndex]}")]`;
     await (await $(addButtonForSPF30)).waitForClickable();
     await (await $(addButtonForSPF30)).click();
     answerSPF30= await $(addButtonForSPF30).getAttribute('onclick');
     console.log("SPF 30 Product Added",  answerSPF30  )
    }

     
     //MAKING LIST ON ITEMS THAT ARE CLICKED

     var listSun= [answerSPF50, answerSPF30];
     sunItemsAdded= locatorsMoist.extractNames(listSun)                
     console.log("ITEMS CLICKED",  sunItemsAdded);

     locators.cartBtn.click();

    