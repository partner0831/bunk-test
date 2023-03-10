import getUniqueNameArray from "./getUniqueNameArray";

// import interfaces
import { ExpenseObj, ExpenseArray } from "../interface/types";

/**
 * This getDividedArray function divides expenses array into lower and higher amount array than equalshare
 */
const getDividedArray = (inputArr: ExpenseArray, equalShare: number) => {
    const lowerArray: ExpenseArray = [];
    const higherArray: ExpenseArray = [];
    const uniqueNameArray = getUniqueNameArray(inputArr);
    uniqueNameArray.forEach((item: string) => {
        let amount = 0;
        inputArr.forEach((element: ExpenseObj) => {
            if (element.name === item) amount += element.amount;
        });

        if (amount < equalShare) lowerArray.push({ name: item, amount: amount });
        else higherArray.push({ name: item, amount: amount });
    });
    const dividedArr = {
        lower: lowerArray,
        higher: higherArray,
    };
    return dividedArr;
};

export default getDividedArray;