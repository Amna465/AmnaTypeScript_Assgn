import * as checkoutTasks from '../CheckoutPage/checkout.Functions';
import * as checkoutAssert from '../CheckoutPage/checkout.Assertion';
import * as homeTasks from '../HomePage/home.Tasks';
import * as moistFuncs from '../MoisturizerPage/moist.Functions';
import * as sunFuncs from '../SunscreenPage/sun.Functions';



export var valuesCart;


export async function matchValues() {
    valuesCart = await checkoutTasks.getValuesCart();
    if (homeTasks.temp<19){
        await checkoutAssert.verifyElementsMatches(valuesCart,moistFuncs.moistItemsAdded,"ERROR",true)
    }
    else if (homeTasks.temp>34){
        await checkoutAssert.verifyElementsMatches(valuesCart,sunFuncs.sunItemsAdded,"ERROR", true)
    }
}


export async function Checkout() {

    await checkoutTasks.payBtn();
    await checkoutTasks.giveInput();
};
