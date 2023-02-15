import * as  tasksMoist from '../MoisturizerPage/moist.Tasks';
import * as  tasksSun from '../SunscreenPage/sun.Tasks';
import * as  locators from '../CheckoutPage/checkout.Locators';
import * as  tasksCheckout from '../CheckoutPage/checkout.Tasks';
import assertion = require('assert');
import assert = require('soft-assert');

import * as commonAssertion from '../../pageobjects/common_assertions'

import { ChainablePromiseElement } from 'webdriverio';

// export async function matchValuesMoist(){
//     console.log("bla:" ,await tasksMoist.moistItemsAdded)
//     if (tasksCheckout.detailsCart[0], tasksMoist.moistItemsAdded[0] && tasksCheckout.detailsCart[1]== tasksMoist.moistItemsAdded[1]){
//         console.log("CLICKED ITEMS AND CART ITEMS MATCHED")
//     }
//     else{
//         console.log("CLICKED ITEMS AND CART ITEMS NOT MATCHED")
//     }
// };
// export async function matchValuesSunscreen(){
//     console.log("bla:" ,await tasksSun.sunItemsAdded)
//     //await assert.equal (tasksCheckout.detailsCart[0], tasksSun.sunItemsAdded[0] )
//         //&& tasksCheckout.detailsCart[1]== tasksSun.sunItemsAdded[1] );
    
//     if (tasksCheckout.detailsCart[0], tasksMoist.moistItemsAdded[0] && tasksCheckout.detailsCart[1]== tasksMoist.moistItemsAdded[1]){
//         console.log("CLICKED ITEMS AND CART ITEMS MATCHED")
//     }
//     else{
//         console.log("CLICKED ITEMS AND CART ITEMS NOT MATCHED")
//     }
// };

export function verifyElementsMatches(
    actualValue: string | number | string[] | number[] | any,
    expectedValue: string | number | string[] | number[] | any,
    errorMessage: string,
    isLast?: boolean
  ) {
    assert.softAssert(actualValue, expectedValue, errorMessage, []);
    if (isLast) assert.softAssertAll();
  }
  
  verifyElementsMatches(tasksCheckout.detailsCart,tasksMoist.moistItemsAdded,"ERROR",true)




