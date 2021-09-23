import { NextFunction, Request, Response } from "express";
import { VERIFY_TOKEN } from "../../../utils/constant";
import { WebhookHook } from "../webhook.enum";
import { IGetWebhook } from "../webhook.interface";

const getWebhook = (
  req: Request<any, any, any, IGetWebhook>,
  res: Response,
  next: NextFunction
) => {
  const {
    "hub.mode": mode,
    "hub.verify_token": verify_token,
    "hub.challenge": challenge,
  } = req.query;
  // Checks if a token and mode is in the query string of the request
  if (mode && verify_token) {
    // Checks the mode and token sent is correct
    if (mode === WebhookHook.SUBSCRIBE && verify_token === VERIFY_TOKEN) {
      // Responds with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
};

export default getWebhook;
