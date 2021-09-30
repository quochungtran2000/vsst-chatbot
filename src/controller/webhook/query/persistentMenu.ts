import { NextFunction, Request, Response } from "express";
import { CHATBOT_DOMAIN } from "../webhook.constant";
import {
  CallToActionType,
  PostBackPayload,
  SendRequestType,
} from "../webhook.enum";
import {
  ICallToAction,
  IMessageProfile,
  IPersistentMenu,
} from "../webhook.interface";
import { sendRequest } from "../webhook.utils";

const persistentMenu = async  (req: Request, res: Response, next: NextFunction) => {
  console.log('`asd')
  try {
    const callToAction1: ICallToAction = {
      type: CallToActionType.POSTBACK,
      title: "Title1",
      payload: PostBackPayload.RESET_CHATBOT,
    };

    const callToAction2: ICallToAction = {
      type: CallToActionType.POSTBACK,
      title: "Title1",
      url: "https://hungblog.vercel.app",
      webview_height_ratio: "full",
    };
    const callToAction3: ICallToAction = {
      type: CallToActionType.POSTBACK,
      title: "Title2",
      url: "https://hungblog.vercel.app",
    };

    const data: IPersistentMenu = {
      locale: "default",
      composer_input_disabled: false,
      call_to_actions: [callToAction1, callToAction2, callToAction3],
    };

    const result = await sendRequest(SendRequestType.PERSISTENT_MENU, data);
    console.log(result)

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
};

export default persistentMenu;
