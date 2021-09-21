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
