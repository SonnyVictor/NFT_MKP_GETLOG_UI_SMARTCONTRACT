import axios from "axios";
import qs from "query-string";

// ----------------------------------------------------------------------
// const BASE_URL = "https://api-x-render.vercel.app/api";
const BASE_URL = 'http://138.201.140.123:3001'
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
