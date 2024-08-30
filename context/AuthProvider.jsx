import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import flushSync from "react-dom"
import axios from "axios";
import getAuthToken from '../src/utils/AuthToken'; // Importa la función

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);
    const navigate = useNavigate();
    const [darkTheme, setDarkTheme] = useState()

    // Utilizamos el useEffect para autorizar a los usuarios con el Token
    //Para eso se consulta la API con el token y se guarda los datos de Auth en el state
    useEffect(() => {

        // Verificamos el theme
        const theme = localStorage.getItem('theme')
        if (theme === 'true') {
            setDarkTheme(true)
            document.querySelector('html').classList.add('dark')
        } else {
            setDarkTheme(false)
            document.querySelector('html').classList.remove('dark')
        }


        const autenticarUsuario = async () => {

            const tokenAPI = await getAuthToken(); // Obtén el token usando la función
            const token = await localStorage.getItem('tokenUser');

            if (!token) {
                setCargando(false);
                return;
            }

            const configWithTokenAPI = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: tokenAPI
                }
            };


            // Realizamos una consulta a la API
            try {
                const { data } = await axios.post('http://172.206.55.212:4001/api/users/verify-token', { token }, configWithTokenAPI);
                const user = data.user

                // Guardamos los datos del usuario en el contexto
                setAuth(user)

                // Reenviamos al usuario si no existe el contexto
                if (!user.id) {
                    navigate('/app');
                }

                setCargando(false);

            } catch (error) {
                setAuth({});
                setCargando(false);
            }
        }

        autenticarUsuario(); // Llamamos la función

    }, []);



    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                darkTheme,
                setDarkTheme
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };

export default AuthContext;
