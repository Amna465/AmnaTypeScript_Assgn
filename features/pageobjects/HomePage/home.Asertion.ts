
import { ChainablePromiseElement } from 'webdriverio';
import assert = require('assert');


import * as  locators from './home.Locators';

var str= "Current temperature"
console.log(locators.Header.isDisplayed());
export var verifyhomeHeader= assert.equal ((await (locators.Header )), str);


export var verifyTemperature= console.log((await(locators.valuetemperture.isDisplayed())));

// assert(10).equals(10); 