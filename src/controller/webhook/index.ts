import getWebhook from "./query/getWebhook";
import messageProfile from "./query/messageProfile";
import persistentMenu from "./query/persistentMenu";
import postWenhook from "./query/postWebhook";

const webhookConntroller = {
  getWebhook: getWebhook,
  postWebhook: postWenhook,
  messageProfile: messageProfile,
  persistentMenu: persistentMenu
};

export default webhookConntroller;
