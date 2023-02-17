import * as moistTasks from './moist.Functions';
import * as moistLocators from '../MoisturizerPage/moist.Locators';
import * as moistAssertions from '../MoisturizerPage/moist.Assertion';
import * as  common from '../common_actions';

export var values;

export async function moistProducts()
{await moistTasks.getDetailsAloe();
await moistTasks.getDetailsAlmonds();
values = await moistTasks.getClickedItemsNames();
await common.waitAndClick(moistLocators.cartBtn)
};