import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Oath from "../components/Oath";
import loginImage from '../assets/home.png'; // Asegúrate de importar tu imagen correctamente
import getAuthToken from '../utils/AuthToken'; // Importa la función

import backgroundImage from '../assets/IMG-1.png'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [consentimiento, setConsentimiento] = useState(false)
    const [alerta, setAlerta] = useState({});

    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();

        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            console.log('alerta activada')
            return;
        }

        try {
            const tokenAPI = await getAuthToken(); // Obtén el token usando la función
            //localStorage.setItem('tokenAPI', tokenAPI);

            const configWithTokenAPI = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: tokenAPI
                }
            };

            const {data, status} = await axios.post('http://172.206.55.212:4001/api/users/login', { email, password }, configWithTokenAPI);
            console.log(data)
            console.log(status)

            const token = data.token.replace('Bearer ', '');
            localStorage.setItem('tokenUser', token);
            setAuth(data.user);
            // status 400 contraseña o email erroneo - 200 exitoso - otros error de sistema
            navigate('/app'); // Sección privada
        } catch (error) {
            setAlerta({
                msg: error.response ? error.response.data.msg : 'Error al realizar la solicitud',
                error: true
            });
        }
    };

    const { msg } = alerta;

    return (
        <>

            <div className=" flex justify-center p-5 md:py-24 md:flex-row flex-col items-center md:items-start relative pt-40 h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md transform transition-all duration-200">
                    <h2 className="text-4xl font-poppins font-semibold text-white mb-6 text-center animate-pulse">Ingresar</h2>
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="input-field relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white placeholder-gray-200 transition duration-200"
                            />
                            <i className="fas fa-envelope absolute right-3 top-3 text-white"></i>
                        </div>
                        <div className="input-field relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Contraseña"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-blue-300 text-white placeholder-gray-200 transition duration-200"
                            />
                            <i className="fas fa-lock absolute right-3 top-3 text-white"></i>
                        </div>

                        {msg && <Alerta alerta={alerta} />}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300 transition duration-300 transform">
                            Iniciar Sesión
                            <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </form>


                    <p className="text-white text-center mt-6">
                        ¿No tienes una cuenta?
                        <Link to="/registrar" className="font-bold hover:underline"> Crear Cuenta</Link>
                    </p>

                    <div className="mt-8 flex justify-center space-x-4">
                        <Link t="#" className="text-white hover:text-pink-200 transition-colors duration-200">
                            <i className="fab fa-facebook-f text-2xl"></i>
                        </Link>
                        <Link t="#" className="text-white hover:text-pink-200 transition-colors duration-200">
                            <i className="fab fa-twitter text-2xl"></i>
                        </Link>
                        <Link t="#" className="text-white hover:text-pink-200 transition-colors duration-200">
                            <i className="fab fa-google text-2xl"></i>
                        </Link>
                    </div>
                </div>
            </div>
          



        </>
    )
}

export default Login
