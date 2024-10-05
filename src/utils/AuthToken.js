// src/utils/authToken.js

import axios from 'axios';

const getAuthToken = async () => {
  try {
    const additionalData = {
      client_id: "6680d210f99e64008a3f220c",
      secret_key: "$2a$10$rnTJzfonAUa5Rohozd3hIem2.fwN19v3eXGakL2RHO4jQpieaHfiq"
    };
    const loginUrl = "https://apitoken.guiaysalud.com/api/auth/token";
    const loginResponse = await axios.post(loginUrl, additionalData);
    return loginResponse.data.token;
  } catch (error) {
    console.error('Error al obtener el token:', error);
    throw new Error('No se pudo obtener el token');
  }
};

export default getAuthToken;
