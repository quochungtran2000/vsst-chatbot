import request from "request";
import messageApi from "../../axios/messageApi";
import { PAGE_ACCESS_TOKEN } from "../../utils/constant";
import {
  PostBackPayload,
  RequestMethod,
  SendRequestType,
} from "./webhook.enum";
import {
  IMessage,
  ISendMessageRecipient,
  ISendRequestParams,
  IUserProfile,
} from "./webhook.interface";
import { mappingRecipientParams, mappingRequestParams } from "./webhook.mapper";

// Handles messages events

export function handleMessage(
  sender: ISendMessageRecipient,
  received_message: any
) {
  let response;

  // Checks if the message contains text
  if (received_message.text) {
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    response = {
      text: `You sent the message: "${received_message.text}". Now send me an attachment!`,
    };
  } else if (received_message.attachments) {
    // Get the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Is this the right picture?",
              subtitle: "Tap a button to answer.",
              image_url: attachment_url,
              buttons: [
                {
                  type: "postback",
                  title: "Yes!",
                  payload: PostBackPayload.YES,
                },
                {
                  type: "postback",
                  title: "No!",
                  payload: PostBackPayload.NO,
                },
                {
                  type: "postback",
                  title: "HI",
                  payload: PostBackPayload.HI,
                },
              ],
            },
          ],
        },
      },
    };
  }

  const recipient = mappingRecipientParams(sender);

  const data: IMessage = {
    recipient: recipient,
    message: response,
  };

  sendRequest(SendRequestType.MESSAGE, data);
}

// Handles messaging_postbacks events
export async function handlePostback(
  sender: ISendMessageRecipient,
  received_postback: any
) {
  try {
    console.log(`handlePostback sender`, sender);
    console.log(`received_postback`, received_postback);
    let text;
    let attachment;
    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    switch (payload) {
      case PostBackPayload.YES: {
        text = "hihi yes";
        break;
      }
      case PostBackPayload.NO: {
        text = "Noooooooo.";
        break;
      }
      case PostBackPayload.GET_STARTED: {
        text = `Chào mừng bạn đã đến với Vì Sale Sạch Túi`;
        if (sender.id) {
          const user: IUserProfile = await messageApi.getAccountInfo(sender.id);
          text = `Chào mừng ${user.name} đã đến với Vì Sale Sạch Túi`;
        }
        break;
      }
      case PostBackPayload.HI: {
        text = `Chào bạn vô danh`;
        if (sender.id) {
          const user: IUserProfile = await messageApi.getAccountInfo(sender.id);
          attachment = {
            type: "image",
            payload: {
              url: user.profile_pic,
              is_reusable: true,
            },
          };
        }
      }
    }

    const recipient = mappingRecipientParams(sender);

    const data: IMessage = {
      recipient: recipient,
      message: { text: text },
    };

    sendRequest(SendRequestType.MESSAGE, data);
  } catch (error) {
    console.log(error);
  }
}

export const sendRequest = (type: SendRequestType, data: any) => {
  const params: ISendRequestParams = mappingRequestParams(type, data);
  return createRequest(params.url, params.method, params.data);
};

const createRequest = (url: string, method: RequestMethod, data: any) => {
  return request(
    {
      uri: url,
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: method,
      json: data,
    },
    (err, res, body) => {
      if (!err) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
};
