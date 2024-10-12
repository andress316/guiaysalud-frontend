import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Oath from "../components/Oath";
import loginImage from '../assets/home.png'; // Asegúrate de importar tu imagen correctamente
import getAuthToken from '../utils/AuthToken'; // Importa la función
import { Spinner } from "flowbite-react";

import backgroundImage from '../assets/IMG-1.png'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [consentimiento, setConsentimiento] = useState(false)
    const [botonCargando, setBotonCargando] = useState(false)
    const [alerta, setAlerta] = useState({});

    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();
        setBotonCargando(true)

        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            console.log('alerta activada')
            setBotonCargando(false)
            return;
        }

        try {
            console.log('desde llamada de axios')
            const tokenAPI = await getAuthToken(); // Obtén el token usando la función

            const configWithTokenAPI = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: tokenAPI
                }
            };

            const { data, status } = await axios.post('https://apiusers.guiaysalud.com/api/users/login', { email, password }, configWithTokenAPI);

            if (status === 200 && data.error === '0403.user'){
                setAlerta({
                    msg: 'Revisa tu correo y activa tu cuenta',
                    error: true
                });
                setBotonCargando(false)
                return
            }

            if (status === 400){
                setAlerta({
                    msg: 'Usuario ya existe, inicia sesión o recupera tu contraseña',
                    error: true
                });
                setBotonCargando(false)
                return
            }

            if (data.error === '0402.user' || data.error === '0401.user') {
                setAlerta({
                    msg: 'Usuario o contraseña no válidos',
                    error: true
                });
                setBotonCargando(false)
                return
            }

            const token = data.token.replace('Bearer ', '');
            localStorage.setItem('tokenUser', token);



            setAuth(data.user);
            setBotonCargando(false)

            console.log(data)
            window.open("/app","_self");
            // navigate('/app'); // Sección privada

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
                            {botonCargando ? <Spinner color="purple" aria-label="Default status example" /> : <>Iniciar Sesión <i className="fas fa-arrow-right ml-2"></i></>}

                        </button>
                    </form>


                    <p className="text-white text-center mt-6">
                        <Link to="/olvide-password" className="font-bold hover:underline"> Recuperar Contraseña</Link>
                    </p>
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
