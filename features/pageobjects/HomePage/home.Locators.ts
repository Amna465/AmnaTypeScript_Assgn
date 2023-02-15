import { ChainablePromiseElement } from 'webdriverio';

//import Page from './page';

export let Header = $("//h2[text()='Current temperature']");
export let valuetemperture= $("#temperature");
export let btnMoisturizers = $("//button[text()='Buy moisturizers']");
export let btnSunscreen = $("//button[text()='Buy sunscreens']");


export function sort(array){
    var Price=array.sort(function(a, b){return a - b}); //SORTING ARRAY
    return Price;
}


//module.exports = Header, valuetemperture, sort;