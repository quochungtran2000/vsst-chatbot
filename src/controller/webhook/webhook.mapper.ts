import { MessageProfileUrl, MessageUrl } from "./webhook.constant";
import { RequestMethod, SendRequestType } from "./webhook.enum";
import { ISendRequestParams } from "./webhook.interface";

export const mappingRequestParams = (
  type: SendRequestType,
  data: any
): ISendRequestParams => {
  const result: ISendRequestParams = {
    method: RequestMethod.GET,
    data: data,
    url: MessageUrl,
  };

  switch (type) {
    case SendRequestType.MESSAGE: {
      result.url = MessageUrl;
      result.method = RequestMethod.POST;
      break;
    }
    case SendRequestType.MESSAGE_PROFILE: {
      result.url = MessageProfileUrl;
      result.method = RequestMethod.POST;
      break;
    }
  }

  return result;
};
