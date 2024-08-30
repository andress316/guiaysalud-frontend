import React from 'react'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import AvatarUsuario from "../assets/AVATAR-GRANDE.png"
import { Label, Select, Button, Checkbox, TextInput } from "flowbite-react";

const ConfiguracionPerfil = () => {
    const [editarPerfil, setEditarPerfil] = useState(false)
    const { auth, setAuth } = useAuth()

    const [nuevoNombre, setNuevoNombre] = useState('')
    const [nuevaCondicion, setNuevaCondicion] = useState('')
    const [nuevaDia, setNuevoDia] = useState('')
    const [nuevoMes, setNuevoMes] = useState('')
    const [nuevoAño, setNuevoAño] = useState('')
    const [nuevoPais, setNuevoPais] = useState('')
    const [nuevoCpontryCode, setNuevoCountryCode] = useState('')
    const [nuevoNumero, setNuevoNumero] = useState('')

    const handleEdit = e => {
        e.preventDefault();
        setEditarPerfil(!editarPerfil)
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        setEditarPerfil(!editarPerfil)
    }



    return (

        <>
            {!editarPerfil ?
                <div className="bg-white dark:bg-slate-700 rounded-xl mb-10 transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mx-3">

                    <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Configuración de perfil</h1>

                    <div className='flex md:flex-row flex-col items-center justify-center md:items-start relative gap-16 p-10'>

                        <div className=''>
                            <img className='h-[20vh] rounded-full' src={AvatarUsuario} alt={`Avatar usuario`} />
                        </div>

                        <div className=''>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>Nombre:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>{auth.nombre}</h3>
                            </div>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>Condición:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>Cáncer de estómago</h3>
                            </div>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>Fecha de nacimiento:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>53</h3>
                            </div>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>País:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>Chile</h3>
                            </div>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>Teléfono:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>+56957600539</h3>
                            </div>

                            <button className="block w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleEdit}>Editar Perfil</button>

                        </div>
                    </div>

                </div> :


                <div className="bg-white dark:bg-slate-700 rounded-xl mb-10 transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mx-3">

                    <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Configuración de perfil</h1>

                    <div className='flex md:flex-row flex-col items-center justify-center md:items-start relative gap-16 p-10'>
                        <div className='flex flex-col'>
                            <img className='h-[20vh] rounded-full' src={AvatarUsuario} alt={`Avatar usuario`} />
                            <button className="mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleSubmit}>Seleccionar Avatar</button>
                        </div>
                        



                        <div className=''>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-5'>
                                    <div className="mb-2 block">
                                        <h3 className='font-poppins'>Nombre:</h3>
                                    </div>
                                    <TextInput id="nombre" name="nombre" type="text" sizing="md" placeholder={auth.nombre} value={nuevoNombre} onChange={e => setNuevoNombre(e.target.value)} className='font-poppins' />
                                </div>


                                <div className='mb-5'>
                                    <div className="max-w-md">
                                        <div className="mb-2 block">
                                            <h3 className='font-poppins'>Condición:</h3>
                                        </div>
                                        <Select id="countries" onChange={e => setNuevaCondicion(e.target.value)}>
                                            <option value="" selected disabled hidden>Escoge una opción</option>
                                            <option>Cáncer de estómago</option>
                                            <option>Cáncer de pulmón</option>
                                            <option>Cáncer de vejíga</option>
                                            <option>Cáncer de ovario</option>
                                        </Select>
                                    </div>
                                </div>




                                <div className='mb-5'>
                                    <div className="max-w-md">
                                        <div className="mb-2 block">
                                            <h3 className='font-poppins'>Fecha de nacimiento:</h3>
                                        </div>
                                        <div className='flex gap-3'>
                                            <Select id="dia" onChange={e => setNuevoDia(e.target.value)}>
                                                <option value="" selected disabled hidden>Día</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </Select>
                                            <Select id="mes" onChange={e => setNuevoMes(e.target.value)}>
                                                <option value="" selected disabled hidden>Mes</option>
                                                <option>Enero</option>
                                                <option>Febrero</option>
                                                <option>Marzo</option>
                                                <option>Abril</option>
                                            </Select>
                                            <Select id="año" onChange={e => setNuevoAño(e.target.value)}>
                                                <option value="" selected disabled hidden>Año</option>
                                                <option>2023</option>
                                                <option>2022</option>
                                                <option>2021</option>
                                                <option>2020</option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>





                                <div className='mb-5'>
                                    <div className="max-w-md">
                                        <div className="mb-2 block">
                                            <h3 className='font-poppins'>País:</h3>
                                        </div>
                                        <Select id="countries" onChange={e => setNuevoPais(e.target.value)}>
                                            <option value="" selected disabled hidden>Escoge una opción</option>
                                            <option>Chile</option>
                                            <option>Argentina</option>
                                            <option>Brasil</option>
                                            <option>México</option>
                                        </Select>
                                    </div>
                                </div>

                                <div className='mb-5'>
                                    <h3 className='font-poppins'>Teléfono:</h3>
                                    <div className='flex gap-3 items-center'>
                                        <Select id="año" className="w-32" onChange={e => setNuevoCountryCode(e.target.value)}>
                                            <option value="" selected disabled hidden>Cod.</option>
                                            <option>+569</option>
                                            <option>+591</option>
                                        </Select>
                                        <TextInput id="whatsapp" name="whatsapp" type="number" sizing="md" placeholder={auth.nombre} value={nuevoNumero} onChange={e => setNuevoNumero(e.target.value)} className='font-poppins w-full' />
                                    </div>
                                </div>

                            </form>

                            <button className="block w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleSubmit}>Guardar Cambios</button>

                        </div>
                    </div>

                </div>

            }



        </>
    )
}

export default ConfiguracionPerfil
