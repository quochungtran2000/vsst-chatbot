import { NextFunction, Request, Response } from "express";
import { CHATBOT_DOMAIN } from "../webhook.constant";
import { PostBackPayload, SendRequestType } from "../webhook.enum";
import { IMessageProfile } from "../webhook.interface";
import { sendRequest } from "../webhook.utils";

const messageProfile = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: IMessageProfile = {
      get_started: {
        payload: PostBackPayload.GET_STARTED,
      },
      whitelisted_domains: [CHATBOT_DOMAIN],
    };

    sendRequest(SendRequestType.MESSAGE_PROFILE, data);

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
};

export default messageProfile;
