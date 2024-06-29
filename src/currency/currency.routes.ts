import { Router, Request, Response } from "express";
import { currencies } from "./currencies";
import { Currency } from "./currency.model";

export const currencyRouter = Router();

currencyRouter.get("/:countryCode", (req: Request, res: Response) => {
  const { countryCode } = req.params;
  const currency = currencies.find(
    (currency) =>
      currency.country.toLocaleLowerCase() ===
      (countryCode as string).toLocaleLowerCase()
  );
  if (!currency) {
    return res.status(404).end();
  }
  return res.json(currency);
});
