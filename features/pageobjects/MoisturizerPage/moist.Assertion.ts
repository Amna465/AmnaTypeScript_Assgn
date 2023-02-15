// import * as assert from 'assert';
// import { ChainablePromiseElement } from 'webdriverio';
 import * as  locators from '../MoisturizerPage/moist.Locators';
// import * as  tasks from '../MoisturizerPage/tasks';
import assert = require('assert');


var str= "Moisturizer"
export var verifyhomeHeader= assert.equal ((await (locators.moistHeader )), str);


        
