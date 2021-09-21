import { NextFunction, Request, Response } from "express";
import request from "request";
import { FB_API, PAGE_ACCESS_TOKEN } from "../../utils/constant";

const messageProfile = (req: Request, res: Response, next: NextFunction) => {
  const request_body = {
    get_started: {
      payload: { payload: "GET_STARTED" },
      whitelisted_domains: ["https://vsst-chatbot.herokuapp.com/api/v1"],
    },
  };

  request(
    {
      uri: `${FB_API}/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`,
      qs: {
        asscess_token: PAGE_ACCESS_TOKEN,
      },
      method: "POST",
      json: request_body,
    },
    (err, res, body) => {
      if (!err) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
};

export default messageProfile;
