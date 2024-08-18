import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
});

const clienteaxiosToken = axios.create({
    baseURLToken: `${import.meta.env.API_TOKEN_URL_REMOTE}/`
});

export { clienteAxios, clienteaxiosToken };
