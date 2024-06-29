import { Router, Request, Response } from "express";
import { developers } from "./developers";
import { Developer } from "./developer.model";

export const developerRouter = Router();

developerRouter.get("/", (req: Request, res: Response) => {
  const { type, level } = req.query;
  let results: Developer[] = developers;
  if (type || level) {
    results = results.filter((dev) => {
      let result = true;
      if (level) {
        result = result && dev.level === level;
      }
      if (type) {
        result = result && dev.type === type;
      }
      return result;
    });
  }
  return res.json(results);
});
