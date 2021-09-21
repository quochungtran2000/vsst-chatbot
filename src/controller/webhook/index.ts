import getWebhook from "./getWebhook";
import messageProfile from "./messageProfile";
import postWenhook from "./postWebhook";

const webhookConntroller = {
  getWebhook: getWebhook,
  postWebhook: postWenhook,
  messageProfile: messageProfile,
};

export default webhookConntroller;
