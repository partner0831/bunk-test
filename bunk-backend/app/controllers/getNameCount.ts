import getUniqueNameArray from "./getUniqueNameArray";

// import interfaces
import { ExpenseArray } from "../interface/types";

/**
 * This getNameCount function gets count of different names from name array
 */
const getNameCount = (inputArr: ExpenseArray) => {
    let count = 0;
    count = getUniqueNameArray(inputArr).length;
    return count;
};

export default getNameCount;