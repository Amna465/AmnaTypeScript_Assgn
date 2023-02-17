import {ChainablePromiseElement} from 'webdriverio';
import * as locators from './sun.Locators';
import * as locatorsMoist from '../MoisturizerPage/moist.Locators';
import * as commonAction from '../common_actions';

// VARIABLES
export var answerSPF30;
export var answerSPF50;
export var sunItemsAdded;


// FUNCTIONS
export async function getDetails_SPF50() {
    let itemsArray: any = await browser.$$(locators.productsDetails_SPF50).map(elem => elem.getAttribute('onclick')); // FETCHING DETAILS OF ALOE PRODUCTS
    var detailsSPF50 = await Promise.all(itemsArray);
    console.log(detailsSPF50);

    answerSPF50 = await commonAction.getLeastExpensiveProduct(detailsSPF50);
    (console.log("SPF-50 Product Added", await answerSPF50));
}

export async function getDetails_SPF30() {

    let itemsArray30: any = await browser.$$(locators.productsDetails_SPF30).map(elem => elem.getAttribute('onclick')); // FETCHING DETAILS OF ALOE PRODUCTS
    var detailsSPF30 = await Promise.all(itemsArray30);
    console.log("DETAILS SPF30", detailsSPF30);
    answerSPF30 = await commonAction.getMostExpensiveProduct(detailsSPF30);
    (console.log("SPF 30 Product Added", answerSPF30))

}


export async function getClickedItemsNames() {
    var str = [answerSPF50, answerSPF30];
    (console.log("LIST SUNSCREEN:", str));
    sunItemsAdded = commonAction.extractNames(str);
    return sunItemsAdded;
}
