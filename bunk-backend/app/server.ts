import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import expenseRoute from "./routes/expenseRoute";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: true }));

// Primary App Routers
app.use("/payouts", expenseRoute);

// define port number of server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
