export enum PostBackPayload {
  YES = "YES",
  NO = "NO",
  GET_STARTED = "GET_STARTED",
  HI = "HI",
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
  OBJECT = "object",
}

export enum WebhookReferral {
  ADS = "ADS",
  SHORTLINK = "SHORTLINK",
  CUSTOMER_CHAT_PLUGIN = "CUSTOMER_CHAT_PLUGIN",
}
