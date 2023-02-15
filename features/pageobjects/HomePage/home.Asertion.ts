
import { ChainablePromiseElement } from 'webdriverio';
import assertion = require('assert');
import assert = require('soft-assert');



import * as  locators from './home.Locators';

 var str= "Current temperature"

export async function verifyText(){
    await assertion.equal (( await (locators.Header.getText() )), str);
   
} 




//export var verifyTemperature= console.log(((locators.valuetemperture.isDisplayed())));

// // assert(10).equals(10); 