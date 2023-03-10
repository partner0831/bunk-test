// import interfaces
import { ExpenseObj, ExpenseArray } from "../interface/types";

/**
 * This getTotal function gets total amount of every travellers.
 */
const getTotal = (inputArr: ExpenseArray) => {
    let total = 0;
    inputArr.forEach((item: ExpenseObj) => {
        total += item.amount;
    });
    return total;
};

export default getTotal;