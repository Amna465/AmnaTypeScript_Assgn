
 import * as  locators from '../MoisturizerPage/moist.Locators';
// import * as  tasks from '../MoisturizerPage/tasks';

import * as commonAssertion from '../../pageobjects/common_assertions'


export async function verifyMoistHeader(){
   commonAssertion.verifyElementIsDisplayed(locators.moistHeader, "ERROR", true)
}; 


        
