var prices: string[] = [];
var names: string[] = [];


export async function waitAndClick(selector){
    await selector.waitForExist({timeout:3000 , timeoutMsg: "INPUT NOT FOUND"});
    await selector.click();
 }

 export async function sort(array){
    var sortedArray=await (await array.sort(function(a, b){return a - b})); //SORTING ARRAY
    return sortedArray;
}
export async function extractPrice(array){
    for (let i=0; i<array.length; i++){      //EXTRACTING PRICES
        let p = await (await array[i].split(',')[1].split(')')[0]);
        prices.push(p);
     }
     return prices
}
export async function extractNames(array) {
    for (let i=0; i<array.length; i++){      //EXTRACTING Names
              let a = await( await array[i].split("'")[1].split(',')[0]);
              names.push(a);
           }
           return names;
 }