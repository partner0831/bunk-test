// import interfaces
import { ExpenseObj, DividedArray, payoutsArray } from "../interface/types";

/**
 * This functions gets an array of payouts which shows all objects of owes, owed and amount.
 */
const getPayoutsArray = (dividedInputArr: DividedArray, equalShare: number) => {
    const lowerArray = dividedInputArr.lower;
    const higherArray = dividedInputArr.higher;
    const payoutsArray: payoutsArray = [];

    let needValue = 0;
    lowerArray.forEach((item: ExpenseObj) => {
        needValue = equalShare - item.amount;
        higherArray.forEach((element: ExpenseObj) => {
            let plusValue = element.amount - equalShare;
            if (plusValue !== 0) {
                let targetValue = needValue > plusValue ? plusValue : needValue;
                element.amount -= targetValue;
                needValue -= targetValue;
                payoutsArray.push({
                    owes: item.name,
                    owed: element.name,
                    amount: Number(targetValue.toFixed(2)),
                });
            }
        });
    });
    return payoutsArray;
};

export default getPayoutsArray;