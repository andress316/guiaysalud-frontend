import React from 'react'
import useAuth from '../../hooks/useAuth';
import emailContraseña from '../assets/contraseña.png'
import { Card } from "flowbite-react";
import escudoPrivacidad from "../assets/escudo_privacidad.png"

const ConfiguracionPrivacidad = () => {
    const { auth, setAuth } = useAuth()


    const handleCambioEmail = e => {
        console.log('Desde el cambio de email')
    }

    const handleCambioPassword = e => {
        console.log('Desde el cambio de password')
    }
  return (
    <>

            <div className="bg-white dark:bg-slate-700 rounded-xl mb-10 transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mx-3">

                <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Configuración para incio de sesión</h1>

                <div className='flex md:flex-row flex-col items-center justify-center md:items-start relative gap-16 p-10'>

                    <div className=''>
                        <img className='h-[20vh] rounded-full' src={escudoPrivacidad} alt={`Avatar usuario`} />
                    </div>

                    <div className=''>
                        <Card className="max-w-sm">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Solicitar informe GDPR sobre la información del usuario
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Recibiras un informe sobre la información del usuario a través de tu correo electrónico hasta un lapso de 48 horas.
                            </p>
                            <button className="block w-full mt-3 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleCambioEmail}>Solicitar informe</button>
                            <button className="block w-full px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleCambioPassword}>Políticas de privacidad</button>
                        </Card>

                    </div>
                </div>

            </div>


        </>
  )
}

export default ConfiguracionPrivacidad
