import { CallToActionType, Locale, PostBackPayload } from "./webhook.enum";
import { IGretting, IIceBreaker, IPersistentMenu } from "./webhook.interface";

export const CHATBOT_DOMAIN = "https://vsst-chatbot.herokuapp.com/api/v1";

export const persistentMenu: IPersistentMenu = {
  locale: "default",
  composer_input_disabled: false,
  call_to_actions: [
    {
      type: CallToActionType.POSTBACK,
      title: "Khởi động lại bot",
      payload: PostBackPayload.RESET_CHATBOT,
    },
    {
      type: CallToActionType.WEB_URL,
      title: "Blog",
      url: "https://hungblog.vercel.app",
      webview_height_ratio: "full",
    },
    {
      type: CallToActionType.WEB_URL,
      title: "Blog1",
      url: "https://hungblog.vercel.app",
    },
  ],
};

export const listGreeting: IGretting[] = [
  {
    locale: Locale.DEFAULT,
    text: "Xin Chào",
  },
  {
    locale: Locale.EN,
    text: "Hello guys...",
  },
  {
    locale: Locale.VI,
    text: "Xin Chào! Vì Sale Sạch Túi có thể giúp gì cho bạn ạ?",
  },
];

export const listIceBreakers: IIceBreaker[] = [
  {
    question: "Vì Sale Sạch túi là gì?",
    payload: PostBackPayload.WHAT_IS_VSST,
  },
  {
    question: "Làm thế nào để mua được đồ?",
    payload: PostBackPayload.WHAT_IS_VSST,
  },
];
