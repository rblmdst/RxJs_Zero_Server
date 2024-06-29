import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import { developerRouter } from "./developer/developer.routes";
import { countryRouter } from "./country/country.routes";
import { currencyRouter } from "./currency/currency.routes";

const PORT = 3000;
const ACTIVATE_FAIL = false;
const RANDOM_RESPONSE_TIME = false;

const app = express();
app.use(cors());

let randomFail = false;
if (ACTIVATE_FAIL) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (randomFail) {
      randomFail = !randomFail;
      return res.status(500).end();
    }

    randomFail = !randomFail;
    return next();
  });
}

if (RANDOM_RESPONSE_TIME) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const min = 500;
    const max = 5_000;
    const randTime = Math.random() * (max - min) + min;
    setTimeout(() => {
      next();
    }, randTime);
  });
}

app.use("/developers", developerRouter);
app.use("/countries", countryRouter);
app.use("/currencies", currencyRouter);

app.listen(PORT, () => {
  console.log("Server listening on port : ", PORT);
});
