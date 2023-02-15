import * as  tasksMoist from '../MoisturizerPage/moist.Tasks';
import * as  tasksSun from '../SunscreenPage/sun.Tasks';
import * as  locators from '../CheckoutPage/checkout.Locators';
import * as  tasksCheckout from '../CheckoutPage/checkout.Tasks';
import assert = require('assert');
import { ChainablePromiseElement } from 'webdriverio';

export async function matchValuesMoist(){
    assert (tasksCheckout.listCart[0]== tasksMoist.moistitemsAdded[0] && tasksCheckout.listCart[1]== tasksMoist.moistitemsAdded[1] );
    console.log("CLICKED ITEMS AND CART ITEMS MATCHED")
};
export async function matchValuesSunscreen(){
    assert (tasksCheckout.listCart[0]== tasksSun.sunItemsAdded[0] && tasksCheckout.listCart[1]== tasksSun.sunItemsAdded[1] );
    console.log("CLICKED ITEMS AND CART ITEMS MATCHED")
};



