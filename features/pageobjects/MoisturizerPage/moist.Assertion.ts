
 import * as  locators from '../MoisturizerPage/moist.Locators';

import * as commonAssertion from '../../pageobjects/common_assertions'


export async function verifyMoistHeader(){
   commonAssertion.verifyElementIsDisplayed(locators.moistHeader, "ERROR", true)
}; 


        
