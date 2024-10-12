import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import axios from "axios"
import Oath from "../components/Oath"
import getAuthToken from '../utils/AuthToken'; // Importa la función
import { Spinner } from "flowbite-react";


import backgroundImage from '../assets/IMG-1.png'


const Registrar = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const [consentimiento, setConsentimiento] = useState(false)
    const [botonCargando, setBotonCargando] = useState(false)



    const handleConsentimiento = () => {
        setConsentimiento(!consentimiento)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setBotonCargando(true)

        if (!consentimiento){
            setAlerta({
                msg: 'Debes aceptar los términos y condiciones',
                error: true
            })
            setBotonCargando(false)
            return
        }

        if ([nombre, email, password, repetirPassword].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            setBotonCargando(false)
            return
        }

        if (password !== repetirPassword) {
            setAlerta({
                msg: 'Las contraseñas no so iguales',
                error: true
            })
            setBotonCargando(false)
            return
        }

        if (password.length < 6) {
            setAlerta({
                msg: 'Contraseña muy corta, tu contraseña debe tener mínimo 6 caracteres',
                error: true
            })
            setBotonCargando(false)
            return
        }

        setAlerta({})

        // Creamos el usuario a través de la API
        // try {
        //     const data = await axios.post(`http://localhost:3500/api/usuarios`, { nombre, email, password })
        //     console.log(data)
        //     setAlerta({
        //         msg: data.msg,
        //         error: false
        //     })

        //     setNombre('')
        //     setEmail('')
        //     setPassword('')
        //     setRepetirPassword('')

        // } catch (error) {
        //     setAlerta({
        //         msg: error.response.data.msg,
        //         error: true
        //     })
        // }


        try {
            const tokenAPI = await getAuthToken(); // Obtén el token usando la función
            //localStorage.setItem('tokenAPI', tokenAPI);

            const configWithTokenAPI = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: tokenAPI
                }
            };

            const {data, status} = await axios.post('https://apiusers.guiaysalud.com/api/users', { nombre, email, password, confirmPassword: repetirPassword, consentimiento, tipoUsuario: false}, configWithTokenAPI);

            
            if (status === 400){
                setAlerta({
                    msg: 'Usuario ya existente, inicia sesión o recupera tu contraseña',
                    error: true
                });
                setBotonCargando(false)
                return
            }

            if(status === 201){
                setAlerta({
                    msg: 'Revisa tu correo para confirmar la cuenta',
                    error: false
                })
            }
            
            setBotonCargando(false)
    
        } catch (error) {
            setAlerta({
                msg: error.response ? error.response.data.msg : 'Error al realizar la solicitud',
                error: true
            });
        }
    }



    const { msg } = alerta;

    return (
        <>

            <div className=" flex justify-center p-5 md:py-24 md:flex-row flex-col items-center md:items-start relative pt-40 h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md transform transition-all duration-200">
                    <h2 className="text-4xl font-poppins font-semibold text-white mb-6 text-center animate-pulse">Crear Cuenta</h2>
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>

                        <div className="input-field relative">
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                onChange={e => setNombre(e.target.value)}
                                required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-blue-300 text-white placeholder-gray-200 transition duration-200"
                                placeholder="Nombre" />
                            <i className="fas fa-user absolute right-3 top-3 text-white"></i>
                        </div>
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
                        <div className="input-field relative">
                            <input
                                id="repetirPassword"
                                name="repetirPassword"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Repetir Contraseña"
                                value={repetirPassword}
                                onChange={e => setRepetirPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-blue-300 text-white placeholder-gray-200 transition duration-200"
                            />
                            <i className="fas fa-lock absolute right-3 top-3 text-white"></i>
                        </div>


                        <div className="inline-flex items-center">
                            <label
                                className="relative flex items-center p-3 rounded-full cursor-pointer"
                                htmlFor="consentimiento"
                            >
                                <input
                                    type="checkbox"
                                    onChange={handleConsentimiento}
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                    id="consentimiento"
                                    name="consentimiento"

                                />
                                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth={1}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </label>
                            <p className="text-white px-2">Acepto los <Link to="/terminosycondiciones" target="_blank" className="font-extrabold hover:underline ">términos y condiciones</Link></p>
                        </div>

                        {msg && <Alerta alerta={alerta} />}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300 transition duration-300 transform">
                            {botonCargando ? <Spinner color="purple" aria-label="Default status example" /> : <>Crear Cuenta <i className="fas fa-arrow-right ml-2"></i></>}
                        </button>
                    </form>


                    <p className="text-white text-center mt-6">
                        ¿Ya tienes una cuenta?
                        <Link to="/login" className="font-bold hover:underline"> Ingresar</Link>
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

export default Registrar