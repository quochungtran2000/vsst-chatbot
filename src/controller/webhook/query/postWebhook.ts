import { NextFunction, Request, Response } from "express";
import { WebhookObject } from "../webhook.enum";
import { IWebhookEvent } from "../webhook.interface";
import { handleMessage, handlePostback } from "../webhook.utils";

const postWebhook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { object, entry } = req.body;

    // Checks this is an event from a page subscription
    if (object === WebhookObject.PAGE) {
      // Iterates over each entry - there may be multiple if batched
      entry.forEach(async function (entry: any) {
        let result;
        const webhook_event = entry.messaging[0];
        console.log(entry);

        // Get the sender PSID
        const sender = webhook_event.sender;

        // Check if the event is a message or postback and
        // pass the event to the appropriate handler function
        if (webhook_event.message) {
          result = await handleMessage(sender, webhook_event.message);
        } else if (webhook_event.postback) {
          result = await handlePostback(sender, webhook_event.postback);
        }
        console.log(`result`, result);
      });

      // Returns a '200 OK' response to all requests
      res.status(200).send("EVENT_RECEIVED");
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
};

export default postWebhook;
