import assertion = require('assert');
import assert = require('soft-assert');


export async function verifyElementIsDisplayed(
    element,
    errorMessage: string,
    isLast?: boolean
  ) { 
    let status = await element.isDisplayed();
    assert.softTrue(status, errorMessage);
    if (isLast) assert.softAssertAll();
  }


  export async function verifyElementIsClickable(
    element,
    errorMessage: string,
    isLast?: boolean
  ) {
    let status = await element.isClickable()
    assert.softTrue(status, errorMessage);
    if (isLast) assert.softAssertAll();
  }
  