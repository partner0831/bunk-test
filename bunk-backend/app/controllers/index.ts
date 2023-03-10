import { RequestHandler, Request, Response } from "express";

// import interfaces
import { resultObj } from "../interface/types";

// import calculate functions
import getTotal from "./getTotal";
import getNameCount from "./getNameCount";
import getDividedArray from "./getDividedArray";
import getPayoutsArray from "./getPayoutsArray";

/**
 * This function gets total, equalshare and payouts array from request.
 * @param req   Request     requested data of expenses
 * @param res   Response    response data of result object
 */

export const payouts: RequestHandler = (req: Request, res: Response) => {
  const inputArr = req.body.expenses;
  const total = getTotal(inputArr);
  const nameCount = getNameCount(inputArr);
  const equalShare = Number((total / nameCount).toFixed(2));
  const dividedInputArr = getDividedArray(inputArr, equalShare);
  const payoutsArray = getPayoutsArray(dividedInputArr, equalShare);
  const resultObj: resultObj = {
    total: total,
    equalShare: equalShare,
    payouts: payoutsArray,
  };
  res.status(200).json(resultObj);
};
