import { ChainablePromiseElement } from 'webdriverio';

//import Page from './page';

//XPATHS
export let moistHeader = $("//h2[normalize-space()='Moisturizers']")
export let productsDetailsAloe= $$("//button[contains(@onclick,'Aloe')]")
export let productsDetailsAlmonds= $$("//button[contains(@onclick,'Almond')]")
export let  cartBtn=$("//button[@onclick='goToCart()']");

//variables:
 var prices: string[] = [];
 var names: string[] = [];

//FUNCTIONS

export async function sort(array){
    var sortedArray=await (array.sort(function(a, b){return a - b})); //SORTING ARRAY
    return sortedArray;
}
export async function extractPrice(array){
    for (let i=0; i<array.length; i++){      //EXTRACTING PRICES
        let p = array[i].split(',')[1].split(')')[0];
        (prices.push(p));
     }
     return prices
}
export async function extractNames(array){
    for (let i=0; i<array.length; i++){      //EXTRACTING Names
              let a = array[i].split("'")[1].split(',')[0];
              names.push(a);
           }
           return names;
 }



    
  
 