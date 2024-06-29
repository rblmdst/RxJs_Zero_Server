import { Router, Request, Response } from "express";
import { countries } from "./countries";
import { Country } from "./country.model";

export const countryRouter = Router();
countryRouter.get("/:numericCode", (req: Request, res: Response) => {
  const { numericCode } = req.params;
  const country = countries.find(
    (country) => country.numeric === (numericCode as string)
  );
  if (!country) {
    return res.status(404).end();
  }
  return res.json(country);
});

countryRouter.get("/", (req: Request, res: Response) => {
  const { name } = req.query;
  let results: Country[] = countries;
  if (name && (name as string).trim()) {
    results = results.filter((country) =>
      country.name
        .toLocaleLowerCase()
        .includes((name as string).toLocaleLowerCase())
    );
  }
  return res.json(results);
});
