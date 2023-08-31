import axios from "axios";
import qs from "query-string";

// ----------------------------------------------------------------------
const BASE_URL = "https://api-five-psi.vercel.app/api";
// const axiosInstance = axios.create({ baseURL: HOST_API_KEY });
const arrayFormat = "none";
const getQueryStringFromObj = (obj: any) => qs.stringify(obj, { arrayFormat });

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // paramsSerializer: {
  //   serialize: (params: any) => getQueryStringFromObj(params),
  // },
  headers: {
    "Accept-Language": "vi",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
