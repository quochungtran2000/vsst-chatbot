import { NextFunction, Request, Response } from "express";
import {
  CHATBOT_DOMAIN,
  listGreeting,
  // listIceBreakers,
  persistentMenu,
} from "../webhook.constant";
import { PostBackPayload, SendRequestType } from "../webhook.enum";
import { IMessageProfile } from "../webhook.interface";
import { sendRequest } from "../webhook.utils";

const messageProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: IMessageProfile = {
      get_started: {
        payload: PostBackPayload.GET_STARTED,
      },
      whitelisted_domains: [CHATBOT_DOMAIN],
      persistent_menu: [persistentMenu],
      greeting: listGreeting,
      // ice_breakers: listIceBreakers,
    };

    const result = await sendRequest(SendRequestType.MESSAGE_PROFILE, data);

    console.log(result);

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
};

export default messageProfile;
