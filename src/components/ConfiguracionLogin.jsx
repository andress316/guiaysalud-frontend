import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import getAuthToken from '../utils/AuthToken';
import Alerta from './Alerta';
import emailContraseña from '../assets/contraseña.png'
import { Card, Modal, TextInput, Spinner } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ConfiguracionLogin = () => {
    const { auth, setAuth } = useAuth()
    const [alerta, setAlerta] = useState({});
    const [openModalEmail, setOpenModalEmail] = useState(false);
    const [openModalPassword, setOpenModalPassword] = useState(false);

    const [emailActual, setEmailActual] = useState(auth.email)
    const [emailNuevo, setEmailNuevo] = useState('');
    const [emailVerificacion, setEmailVerificacion] = useState('')
    const [botonCargando, setBotonCargando] = useState(false)


    function onCloseModal() {
        setOpenModalEmail(false);
        setOpenModalPassword(false)
        setAlerta({})
    }


    //Cambio de correo para inicio de sesión
    const handleCambioEmail = async e => {
        setBotonCargando(true)

        //Validamos que el correo actual sea el correcto
        if (!emailActual.includes('@') || !emailNuevo.includes('@') || !emailVerificacion.includes('@')) {
            setAlerta({
                msg: "Todos los campos deben ser un correo.",
                error: true
            });
            setBotonCargando(false)
            return
        }


        if (auth.email.trim() !== emailActual.trim()) {
            setAlerta({
                msg: "Correo actual equivocado",
                error: true
            });
            setBotonCargando(false)
            return
        }

        if (emailNuevo.trim() !== emailVerificacion.trim()) {
            setAlerta({
                msg: "Nuevo Email y Repetir Nuevo Email deben ser iguales",
                error: true
            });
            setBotonCargando(false)
            return
        }



        // Realizamos la petición para modificar correo
        try {
            const token = await getAuthToken();
            const configWithTokenBot = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                }
            };

            const { data } = await axios.put(`https://apiusers.guiaysalud.com/api/users/${auth.id}`, { email: emailNuevo }, configWithTokenBot)

            setAlerta({
                msg: "Email modificado con éxito",
                error: false
            });

            setTimeout(() => {
                window.location.reload();
            }, "1000");


        } catch (error) {
            console.log(error)
        }
    }






    const handleCambioPassword = async e => {
        setBotonCargando(true)
        //Extraemos el correo del usuario
        const email = auth.email

        //Realizamos la petición
        try {
            const tokenAPI = await getAuthToken(); // Obtén el token usando la función

            const configWithTokenAPI = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: tokenAPI
                }
            };

            const { data, status } = await axios.post(`https://apiusers.guiaysalud.com/api/users/forgot-password/`, { email }, configWithTokenAPI)
            console.log(status)

            if (status === 200) {
                setAlerta({
                    msg: `Revisa tu correo ${email} para continuar, la sesión se cerrará.`,
                    error: false
                })
                setBotonCargando(false)


                setTimeout(() => {
                    localStorage.removeItem("tokenUser")
                    window.location.reload();
                }, "1500")



                return
            }

            setAlerta({
                msg: data.msg,
                error: false
            })

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }



    const { msg } = alerta;
    return (
        <>

            <div className="bg-white dark:bg-slate-700 rounded-xl mb-10 transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mx-3">

                <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Configuración para incio de sesión</h1>

                <div className='flex md:flex-row flex-col items-center justify-center md:items-start relative gap-16 p-10'>

                    <div className=''>
                        <img className='h-[20vh] rounded-full' src={emailContraseña} alt={`Avatar usuario`} />
                    </div>

                    <div className=''>
                        <div className='mb-5'>
                            <h3 className='font-poppins'>Email:</h3>
                            <h3 className='font-poppins font-semibold text-xl'>{auth.email}</h3>
                        </div>

                        <Card className="max-w-sm">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                ¿Deseas cambiar los datos para incio de sesión?
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Recibiras un correo con las instrucciones para cambiar los datos para iniciar sesión.
                            </p>

                            <button className="block w-full mt-3 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={e => setOpenModalEmail(true)}>Cambiar Email</button>

                            <button className="block w-full px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={e => setOpenModalPassword(true)}>Cambiar Contraseña</button>
                        </Card>

                    </div>
                </div>



            </div>

            {/* //Modal de cambio de correo */}
            <Modal show={openModalEmail} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 mt-3">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Cambio de correo</h3>
                        <p className="">Ingresa y confirma la nueva dirección de correo para iniciar sesión..</p>

                        <div className=''>
                            <form>
                                <div className='mb-5'>
                                    <div className="mb-2 block">
                                        <h3 className='font-poppins'>Email actual:</h3>
                                    </div>
                                    <TextInput id="emailActual" name="emailActual" type="email" sizing="md" placeholder='email@dominio.com' onChange={e => setEmailActual(e.target.value)} className='font-poppins' />
                                </div>
                                <div className='mb-5'>
                                    <div className="mb-2 block">
                                        <h3 className='font-poppins'>Nuevo Email:</h3>
                                    </div>
                                    <TextInput id="nuevoEmail" name="nuevoEmail" type="email" sizing="md" placeholder='nuevo-email@dominio.com' onChange={e => setEmailNuevo(e.target.value)} className='font-poppins' />
                                </div>
                                <div className='mb-5'>
                                    <div className="mb-2 block">
                                        <h3 className='font-poppins'>Repetir Nuevo Email:</h3>
                                    </div>
                                    <TextInput id="nuevoEmailRepetir" name="nuevoEmailRepetir" type="email" sizing="md" placeholder='nuevo-email@dominio.com' onChange={e => setEmailVerificacion(e.target.value)} className='font-poppins' />
                                </div>

                            </form>

                            {msg && <Alerta alerta={alerta} />}
                            <button className="block w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleCambioEmail}>
                                {botonCargando ? <Spinner color="purple" aria-label="Default status example" /> : <>Guardar</>}
                            </button>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>




            {/* //Modal de cambio de correo */}
            <Modal show={openModalPassword} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-600 dark:text-gray-100" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Recibiras un correo con indicaciones y tu sesión será cerrada para que vuelvas a ingresar.
                        </h3>
                        {msg && <Alerta alerta={alerta} />}
                        <div className="">
                            <button className="block w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleCambioPassword}>
                                {botonCargando ? <Spinner color="dark" aria-label="Default status example" /> : <>Cambiar Contraseña</>}
                            </button>
                            <button className="block w-full mt-2 px-6 py-2 rounded text-center text-gray-600 text-sm font-semibold transition bg-gray-200 hover:bg-gray-300 dark:bg-slate-500 dark:hover:bg-slate-600 dark:text-gray-100" onClick={() => setOpenModalPassword(false)}>
                                {botonCargando ? <Spinner color="dark" aria-label="Default status example" /> : <>Cancelar</>}
                            </button>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>



        </>
    )
}

export default ConfiguracionLogin
