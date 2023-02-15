
export async function waitAndClick(selector){
    selector.waitForExist({timeout:3000 , timeoutMsg: "INPUT NOT FOUND"});
    selector.click();
 }