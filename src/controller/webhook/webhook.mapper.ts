import { FB_API, PAGE_ACCESS_TOKEN } from "../../utils/constant";
import { RequestMethod, SendRequestType } from "./webhook.enum";
import { ISendMessageRecipient, ISendRequestParams } from "./webhook.interface";

export const mappingRequestParams = (
  type: SendRequestType,
  data: any
): ISendRequestParams => {
  const MessageProfileUrl = `${FB_API}/v12.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`;
  const MessageUrl = `${FB_API}/v12.0/me/messages`;
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
    case SendRequestType.USER_INFO:{
      result.url = `${FB_API}/${data.id}?fields=first_name,last_name,name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`
      break;
    }
    case SendRequestType.PERSISTENT_MENU: {
      result.url = `${FB_API}/v12.0/me/custom_user_settings?access_token=${PAGE_ACCESS_TOKEN}`
      break;
    }
  }

  return result;
};


export const mappingRecipientParams = (data: ISendMessageRecipient) => {
  const result:any = {};

  if(data.id) result.id = data.id
  if(data.user_ref) result.user_ref = data.user_ref
  // if(data.post_id)

  return result
}


// export const mappingMessagePayload = (payload)