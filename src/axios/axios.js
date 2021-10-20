import axios from "axios";
import { baseUrl } from "../Components/constants/constants";
const AxiosInstance = axios.create({
    baseURL:baseUrl
});
export default AxiosInstance;