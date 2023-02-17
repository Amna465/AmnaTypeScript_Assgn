import * as tasksMoist from '../MoisturizerPage/moist.Functions';
import * as tasksSun from '../SunscreenPage/sun.Functions';
import * as locators from '../CheckoutPage/checkout.Locators';
import * as tasksCheckout from './checkout.Functions';
import assertion = require('assert');
import assert = require('soft-assert');


export function verifyElementsMatches(actualValue: string |number |string[] | number[] | any, expectedValue: string |number |string[] | number[] | any, errorMessage: string, isLast ?:boolean) {
    assert.softAssert(actualValue, expectedValue, errorMessage, []);
    if (isLast) 
        assert.softAssertAll();
    
}
