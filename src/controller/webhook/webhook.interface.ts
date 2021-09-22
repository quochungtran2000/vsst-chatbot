import { RequestMethod } from "./webhook.enum";

export interface IMessageProfile {
  get_started: IGetStarted;
  whitelisted_domains: string[];
}

export interface IGetStarted {
  payload: string;
}

export interface IMessage {
  recipient: IRecipient;
  message: any;
}

export interface IRecipient {
  id: number;
}

export interface ISendRequestParams {
  url: string;
  method: RequestMethod,
  data: any
}

export interface IUserProfile {
  id: number,
  name: string,
  first_name: string,
  last_name: string,
  profile_pic: string,

}