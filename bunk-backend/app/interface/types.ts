export interface ExpenseObj {
    name: string;
    amount: number;
}
export interface StringArray extends Array<string> { }
export interface ExpenseArray extends Array<ExpenseObj> { }
export interface DividedArray {
    lower: ExpenseArray;
    higher: ExpenseArray;
}
export interface payouts {
    owes: string;
    owed: string;
    amount: number;
}
export interface payoutsArray extends Array<payouts> { }
export interface resultObj {
    total: number;
    equalShare: number;
    payouts: payoutsArray;
}