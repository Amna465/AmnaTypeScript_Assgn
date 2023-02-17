import {ChainablePromiseElement} from 'webdriverio';
import * as locators from './moist.Locators';
import * as commonActions from '../common_actions';

// VARIABLES:
export var moistItemsAdded;
export var listMoist;
export var answeraloe;
export var answeralmonds;

// FUNCTIONS

export async function getDetailsAloe() {

    let itemsArray: any = await browser.$$(locators.productsDetailsAloe).map(elem => elem.getAttribute('onclick')); // FETCHING DETAILS OF ALOE PRODUCTS
    var detailsAloe = await Promise.all(itemsArray);
    console.log(detailsAloe);

    answeraloe = await commonActions.getLeastExpensiveProduct(detailsAloe);
    (console.log("Aloe Product Added", answeraloe));
}

export async function getDetailsAlmonds() {

    let itemsArrayAlmonds: any = await browser.$$(locators.productsDetailsAlmonds).map(elem => elem.getAttribute('onclick')); // FETCHING DETAILS OF ALMONDS PRODUCTS
    var detailsAlmonds = await Promise.all(itemsArrayAlmonds);
    console.log(detailsAlmonds);

    answeralmonds = await commonActions.getMostExpensiveProduct(detailsAlmonds);
    console.log("Almond Product Added: ", answeralmonds);
}


export async function getClickedItemsNames() {
    var str = [answeraloe, answeralmonds];
    (console.log("LIST MOISTURIZER:", str));
    moistItemsAdded = commonActions.extractNames(str);
    return moistItemsAdded;
}
