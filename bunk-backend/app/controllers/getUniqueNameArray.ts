// import interfaces
import { ExpenseObj, StringArray, ExpenseArray } from "../interface/types";

/**
 * This getUniqueNameArray function removes all the duplicated names and returns a new name array
 */
const getUniqueNameArray = (inputArr: ExpenseArray) => {
    const nameArr: StringArray = [];
    inputArr.forEach((item: ExpenseObj) => {
        nameArr.push(item.name);
    });
    return [...new Set(nameArr)];
};

export default getUniqueNameArray;