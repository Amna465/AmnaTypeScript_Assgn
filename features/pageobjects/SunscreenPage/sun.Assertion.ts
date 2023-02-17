import * as  locators from '../SunscreenPage/sun.Locators';


import * as commonAssertion from '../../pageobjects/common_assertions'


export async function verifySunHeader(){
   commonAssertion.verifyElementIsDisplayed(locators.sunHeader, "ERROR", true)
}; 


        
