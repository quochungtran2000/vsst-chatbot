import { FB_API, PAGE_ACCESS_TOKEN } from "../../utils/constant";

export const CHATBOT_DOMAIN = "https://vsst-chatbot.herokuapp.com/api/v1";
export const MessageProfileUrl = `${FB_API}/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`;
export const MessageUrl = `${FB_API}/messages`;
