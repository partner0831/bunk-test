import express, { Router } from "express";
import { payouts } from "../controllers";

const router: Router = express.Router();

router.post("/", payouts);

export default router;
