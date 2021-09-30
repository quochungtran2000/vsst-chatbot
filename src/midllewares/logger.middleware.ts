import { NextFunction, Request, Response } from "express";
import chalk from "chalk";

export const LoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  let log = `[${chalk.blue(formatted_date)}] ${chalk.red(method)} ${chalk.cyan(url)} ${chalk.green(status)}`;
  console.log(log);
  next();
};
