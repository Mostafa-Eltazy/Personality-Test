import express, { NextFunction, Request, Response } from "express";
import db from "../db";

const questionRouter = express.Router();
questionRouter.get(
  "/questions",
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(db);
  }
);

export default questionRouter;
