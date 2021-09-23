import { NextFunction, Request, Response } from "express";
import { WebhookObject } from "../webhook.enum";
import { IWebhookEvent } from "../webhook.interface";
import { handleMessage, handlePostback } from "../webhook.utils";

const postWebhook = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { object, entry } = req.body;
  console.log(req.body);
  console.log(`entry`, entry)
  console.log(`entry messing`, entry.messaging)

  // Checks this is an event from a page subscription
  if (object === WebhookObject.OBJECT) {
    // Iterates over each entry - there may be multiple if batched
    entry.forEach(function (entry:any) {
      const webhook_event = entry.messaging[0];
      console.log(`webhook_entry messing`,entry.messaging )
      console.log(`webhook_event`, webhook_event);

      // Get the sender PSID
      const sender = webhook_event.sender;
      console.log("Sender: " + sender);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender, webhook_event.message);
      } else if (webhook_event.postback) {
        handlePostback(sender, webhook_event.postback);
      }
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
};

export default postWebhook;
