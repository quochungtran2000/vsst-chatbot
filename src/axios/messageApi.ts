import { AxiosPromise } from "axios";
import { IUserProfile } from "../controller/webhook/webhook.interface";
import { FB_API, PAGE_ACCESS_TOKEN } from "../utils/constant";
import axiosClient from "./axiosClient";

const messageApi = {
  getAccountInfo: (sender_psid: string): Promise<IUserProfile> => {
    const url = `${FB_API}/${sender_psid}?fields=first_name,last_name,name,profile_pic&access_token=${PAGE_ACCESS_TOKEN} `;
    return axiosClient.get(url);
  },
};

export default messageApi;
