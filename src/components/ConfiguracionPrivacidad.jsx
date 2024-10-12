import React from 'react'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Alerta from './Alerta';
import emailContraseña from '../assets/contraseña.png'
import escudoPrivacidad from "../assets/escudo_privacidad.png"
import { Card, Modal, TextInput, Spinner } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ConfiguracionPrivacidad = () => {
    const { auth, setAuth } = useAuth()
    const [openModalGDPR, setOpenModalGDPR] = useState(false);
    const [openModalPoliticas, setOpenModalPoliticas] = useState(false);
    const [alerta, setAlerta] = useState({});
    const [botonCargando, setBotonCargando] = useState(false)
    const [modalSize, setModalSize] = useState('md');


    function onCloseModal() {
        setOpenModalGDPR(false)
        setOpenModalPoliticas(false)
        setAlerta({})
    }


    const handleGDPR = e => {
        setAlerta({
            msg: `Revisa tu correo ${auth.email}`,
            error: false
        })
        return
    }

    const handlePoliticas = e => {
        console.log('Desde el cambio de password')
    }


    const { msg } = alerta;
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

                            <button className="block w-full mt-3 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={e => setOpenModalGDPR(true)}>Solicitar informe</button>
                            <button className="block w-full px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={e => setOpenModalPoliticas(true)}>Políticas de privacidad</button>

                        </Card>

                    </div>
                </div>

            </div>



            {/* //Modal de cambio de correo */}
            <Modal show={openModalGDPR} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-600 dark:text-gray-100" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Recibiras una confirmación de tu solicitud a tu email
                        </h3>
                        {msg && <Alerta alerta={alerta} />}
                        <div className="">
                            <button className="block w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleGDPR}>
                                {botonCargando ? <Spinner color="dark" aria-label="Default status example" /> : <>Solicitar informe</>}
                            </button>
                            <button className="block w-full mt-2 px-6 py-2 rounded text-center text-gray-600 text-sm font-semibold transition bg-gray-200 hover:bg-gray-300 dark:bg-slate-500 dark:hover:bg-slate-600 dark:text-gray-100" onClick={() => setOpenModalGDPR(false)}>
                                Cancelar
                            </button>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>



            {/* //Modal de politicas de privacidad */}
            <Modal show={openModalPoliticas} size={modalSize} onClose={onCloseModal} popup>
                <Modal.Header className='mt-5 ml-3'>Políticas de privacidad</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 p-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="block w-full mt-2 px-6 py-2 rounded text-center text-gray-600 text-sm font-semibold transition bg-gray-200 hover:bg-gray-300 dark:bg-slate-500 dark:hover:bg-slate-600 dark:text-gray-100" onClick={() => setOpenModalPoliticas(false)}>
                        Cerrar
                    </button>
                </Modal.Footer>


            </Modal>



        </>
    )
}

export default ConfiguracionPrivacidad
