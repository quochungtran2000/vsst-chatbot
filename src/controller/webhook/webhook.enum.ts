export enum PostBackPayload {
  YES = "YES",
  NO = "NO",
  GET_STARTED = "GET_STARTED",
  HI = "HI",
  RESET_CHATBOT = "RESET_CHATBOT",
}

export enum RequestMethod {
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
  PUT = "PUT",
}

export enum SendRequestType {
  MESSAGE = "MESSAGE",
  MESSAGE_PROFILE = "MESSAGE_PROFILE",
  USER_INFO = "USER_INFO",
  PERSISTENT_MENU = "PERSISTENT_MENU"
}

export enum AttachmentType {
  IMAGE = "image",
  AUDIO = "audio",
  VIDEO = "video",
  FILE = "file",
  TEMPLATE = "template",
}

export enum WebhookHook {
  SUBSCRIBE = "subscribe",
}

export enum WebhookObject {
  PAGE = "page",
}

export enum WebhookReferral {
  ADS = "ADS",
  SHORTLINK = "SHORTLINK",
  CUSTOMER_CHAT_PLUGIN = "CUSTOMER_CHAT_PLUGIN",
}

export enum CallToActionType {
  POSTBACK = "postback",
  WEB_URL = "web_url",
}
