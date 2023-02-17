import * as common from '../common_actions';
import * as sunTasks from '../SunscreenPage/sun.Functions';
import * as sunLocators from '../SunscreenPage/sun.Locators';
import * as sunAssertion from '../SunscreenPage/sun.Assertion';

export var values;

export async function sunProducts()
{await sunTasks.getDetails_SPF50();
await sunTasks.getDetails_SPF30();
values = await sunTasks.getClickedItemsNames();
await common.waitAndClick(sunLocators.cartBtn);
};