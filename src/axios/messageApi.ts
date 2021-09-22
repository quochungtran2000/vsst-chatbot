import { AxiosPromise } from "axios";
import { FB_API } from "../utils/constant";
import axiosClient from "./axiosClient";

const messageApi = {
  getAccountInfo: (sender_psid: number): AxiosPromise => {
    const url = `${FB_API}/${sender_psid}?fields=first_name,last_name,name,profile_pic`;
    return axiosClient.get(url);
  },
};

export default messageApi;
