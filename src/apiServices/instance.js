import axios from "axios";

import { StorageKeys } from "../shared/constants";

export default () => {
    axios.defaults.baseURL = " https://ccb986dcb4f6.eu.ngrok.io/api/";

    axios.interceptors.request.use(config => {
        const authData = localStorage.getItem(StorageKeys.AUTH_DATA);
        config.headers.Authorization = !!authData && `Bearer ${ JSON.parse(authData).token }`;

        return config;
    },error => console.log(error));

    axios.interceptors.response.use(res => res,
        ({ response }) => Promise.reject(response.data))
}