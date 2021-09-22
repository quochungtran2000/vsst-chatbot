import { NextFunction, Request, Response } from "express";
import { handleMessage, handlePostback } from "../webhook.utils";

const postWebhook = (req: Request, res: Response, next: NextFunction) => {
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === "page") {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function (entry: any) {
      let webhook_event = entry.messaging[0];
      console.log(`webhook_event`, webhook_event);

      // Get the sender PSID
      let sender_psid = webhook_event?.sender.id || webhook_event?.user_ref;
      console.log("Sender PSID: " + sender_psid);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
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
