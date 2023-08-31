import axios from "axios";
import { API_BACKEND, API_BACKEND_LOCAL } from "@/constants/index";
export const updateProfile = async (data) => {
  //console.log("updateProfile.>>", data);
  const response = await axios.post(`${API_BACKEND}/updateUser?address=${data.address}`, {
    username: data.username,
    avatar: data.avatar,
    banner: data.banner,
    bio: data.bio,
  });
  //console.log("response>>", response);
  return response;
};
export const getProfile = async (address) => {
  const response = await axios.get(`${API_BACKEND}/info?address=${address}`);
  //console.log("response>>", response);
  return response;
};
export const login = async (data) => {
  const response = await axios.post(`${API_BACKEND}/verify?address=${data.account}`, {
    address: data.account,
    message: data.message,
    signature: data.signature,
  });

  return response;
};
