import {
  AttachmentType,
  PostBackPayload,
  RequestMethod,
  WebhookHook,
  WebhookObject,
  WebhookReferral,
} from "./webhook.enum";

export interface IMessageProfile {
  get_started: IGetStarted;
  whitelisted_domains: string[];
}

export interface IGetStarted {
  payload: string;
}

export interface IMessage {
  recipient: ISendMessageRecipient;
  message: any;
}

export interface ISendRequestParams {
  url: string;
  method: RequestMethod;
  data: any;
}

export interface IUserProfile {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  profile_pic: string;
}

export interface ISendMessageData {
  recipient: ISendMessageRecipient;
  message: ISendMessageMessage;
}

export interface ISendMessageRecipient {
  id?: string;
  user_ref?: string;
  post_id?: string;
  comment_id?: string;
}

export interface ISendMessageMessage {
  mid: string;
  text?: string;
  attachment?: ISendMessageMessageAttachment;
}

export interface ISendMessageMessageAttachment {
  type?: AttachmentType;
  payload?: any;
}

export interface IGetWebhook {
  ["hub.mode"]: WebhookHook;
  ["hub.verify_token"]: string;
  ["hub.challenge"]: string;
}

export interface IGetWebhookHook {
  mode: WebhookHook;
  verify_token: string;
  challenge: string;
}

export interface IWebhookEvent {
  object: WebhookObject;
  entry: IWebHookEntry[];
}

export interface IWebHookEntry {
  id: string;
  time: number;
  messaging: IWebHookMessaging[];
}

export interface IWebHookMessaging {
  sender: ISendMessageRecipient;
  rerecipient: ISendMessageRecipient;
  postback?: IWebHookPostBack;
  message?: ISendMessageMessage;
}

export interface IWebHookPostBack {
  title: string;
  payload: PostBackPayload;
  referral: IWebHookPostBackReferral;
}

export interface IWebHookPostBackReferral {
  ref: string;
  source: WebhookReferral;
  type: string;
  referer_uri: string;
  is_guest_user: boolean;
}
