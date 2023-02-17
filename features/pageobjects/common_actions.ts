export async function waitAndClick(selector) {
    await selector.waitForExist({timeout: 3000, timeoutMsg: "INPUT NOT FOUND"});
    await selector.click();
}

export async function sort(array) {
    var sortedArray = await(await array.sort(function (a, b) {
        return a - b
    })); // SORTING ARRAY
    return sortedArray;
}
export async function extractPrice(array) {
    var prices: string[] = [];
    for (let i = 0; i < array.length; i++) { // EXTRACTING PRICES
        let p = await(await array[i].split(',')[1].split(')')[0]);
        prices.push(p);
    }
    return prices
}
export async function extractNames(array) {
    var names: string[] = [];
    for (let i = 0; i < array.length; i++) { // EXTRACTING Names
        let a = await(await array[i].split("'")[1].split(',')[0]);
        names.push(a);
    }
    return names;
}

export async function getLeastExpensiveProduct(array) {
    var itemsPrice = await extractPrice(array);

    let resultLeast = itemsPrice.map(i => Number(i)); // CONVERTING STRING TO INT ARRAY
    var sortedPrice = await sort(resultLeast);
    var lowestPriceIndex = sortedPrice[0];
    let addButtonForCheap = `//button[contains(@onclick, "${
        [lowestPriceIndex]
    }")]`;
    await($(addButtonForCheap)).waitForClickable();
    await($(addButtonForCheap)).click();

    var answerLeast = await $(addButtonForCheap).getAttribute('onclick');
    return answerLeast;
}

export async function getMostExpensiveProduct(array) {
    var itemsPriceExpensive = await extractPrice(array);

    let resultExpensive = itemsPriceExpensive.map(i => Number(i)); // CONVERTING STRING TO INT ARRAY
    var sortedPriceExpensive = await sort(resultExpensive);
    sortedPriceExpensive = sortedPriceExpensive.reverse();
    var highestPriceIndex = sortedPriceExpensive[0];
    let addButtonForExpensive = `//button[contains(@onclick, "${
        [highestPriceIndex]
    }")]`
    await($(addButtonForExpensive)).waitForClickable();
    await($(addButtonForExpensive)).click();

    var answerExpensive = await $(addButtonForExpensive).getAttribute('onclick');
    return answerExpensive;
}
