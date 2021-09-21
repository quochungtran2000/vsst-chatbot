import getWebhook from "./query/getWebhook";
import messageProfile from "./query/messageProfile";
import postWenhook from "./query/postWebhook";

const webhookConntroller = {
  getWebhook: getWebhook,
  postWebhook: postWenhook,
  messageProfile: messageProfile,
};

export default webhookConntroller;
