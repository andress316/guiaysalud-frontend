import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import AvatarUsuarioMasculino from "../assets/AVATAR-HOMBRE-01.png"
import AvatarUsuarioMujer from "../assets/AVATAR-MUJER-01.png"
import { Select, TextInput, Spinner } from "flowbite-react";
import getAuthToken from '../utils/AuthToken';
import Alerta from './Alerta';
import validarTel from '../../helpers/validartel';

import BDEnfermedades from "../../../extras/bd-enfermedades.json"

const ConfiguracionPerfil = () => {
    const [editarPerfil, setEditarPerfil] = useState(false)
    const { auth, setAuth, avatarGrande } = useAuth()
    const [alerta, setAlerta] = useState({});
    const [botonCargando, setBotonCargando] = useState(false)

    const [nuevoNombre, setNuevoNombre] = useState('')
    const [nuevaEnfermedad, setNuevaEnfermedad] = useState('')
    const [nuevoSexo, setNuevoSexo] = useState('')
    const [nuevoDia, setNuevoDia] = useState('')
    const [nuevoMes, setNuevoMes] = useState('')
    const [nuevoAno, setNuevoAno] = useState('')
    const [nuevoPais, setNuevoPais] = useState('')
    const [nuevoCountryCode, setNuevoCountryCode] = useState('')
    const [nuevoNumero, setNuevoNumero] = useState('')

    const [contryCode, setCountryCode] = useState()
    const [numeroTel, setNumeroTel] = useState()


    //datos usuario
    const { id, ciudad, pais, enfermedad, fechaNacimiento, nombre, telefono, sexo } = auth







    const anos = []
    function calcularAnos(limit) {
        var anoActual = (new Date()).getFullYear()
        for (var i = anoActual; i >= limit; i--) {
            anos.push(i)
        };
    }
    calcularAnos(1924)


    const dias = []
    function calcularDias(diaInicial, limit) {
        for (var i = diaInicial; i <= limit; i++) {
            dias.push(i)
        };
    }
    calcularDias(1, 31)

    // Consultamos enfermedades


    const handleEdit = e => {
        e.preventDefault();
        setNuevoCountryCode(telefono.slice(0, 4))
        setNuevoNumero(telefono.slice(4))
        setEditarPerfil(!editarPerfil)
    };


    const handleSubmit = async e => {
        e.preventDefault()
        setBotonCargando(true)

        // Contruimos el objeto con la nueva info
        const nuevaInfoUsuario = {
            nombre: nuevoNombre,
            enfermedad: nuevaEnfermedad,
            sexo: nuevoSexo,
            fechaNacimiento: `${nuevoDia}/${nuevoMes}/${nuevoAno}`,
            pais: nuevoPais,
            telefono: `${!nuevoCountryCode || !nuevoNumero ? telefono : nuevoCountryCode + nuevoNumero}`
        }


        if (!nuevoDia || !nuevoMes || !nuevoAno) {
            nuevaInfoUsuario.fechaNacimiento = auth.fechaNacimiento
        }

        const validacionNumero = validarTel(nuevoCountryCode, nuevoNumero)
        if (validacionNumero.valido === false) {
            setAlerta({
                msg: validacionNumero.mensaje,
                error: true
            });
            setBotonCargando(false)
            return
        }


        try {
            const token = await getAuthToken();
            const configWithTokenBot = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                }
            };

            const { data } = await axios.put(`https://apiusers.guiaysalud.com/api/users/${auth.id}`, nuevaInfoUsuario, configWithTokenBot)
            setAlerta({
                msg: "Información actualizada",
                error: false
            });

            setTimeout(() => {
                window.location.reload();
              }, "1000");

        } catch (error) {
            console.log(error)
        }

        // setEditarPerfil(!editarPerfil)
    }



    const { msg } = alerta;

    return (

        <>
            {!editarPerfil ?
                <div className="bg-white dark:bg-slate-700 rounded-xl mb-10 transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mx-3">

                    <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Configuración de perfil</h1>

                    <div className='flex md:flex-row flex-col items-center justify-center md:items-start relative gap-16 p-10'>

                        <div className=''>
                            <img className='h-[20vh] rounded-full' src={auth.sexo === "femenino" ? AvatarUsuarioMujer : AvatarUsuarioMasculino} alt={`Avatar usuario`} />
                        </div>

                        <div className=''>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>Nombre:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>{auth.nombre}</h3>
                            </div>
                            
                            <div className='mb-5'>
                                <h3 className='font-poppins'>Condición:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>{auth.enfermedad ? enfermedad : '-'}</h3>
                            </div>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>Sexo:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>{auth.sexo ? sexo : '-'}</h3>
                            </div>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>Fecha de nacimiento:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>{auth.fechaNacimiento ? fechaNacimiento : '-'}</h3>
                            </div>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>País:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>{auth.pais ? pais : '-'}</h3>
                            </div>
                            <div className='mb-5'>
                                <h3 className='font-poppins'>Teléfono:</h3>
                                <h3 className='font-poppins font-semibold text-xl'>{auth.telefono ? telefono : '-'}</h3>
                            </div>

                            <button className="block w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleEdit}>Editar Perfil</button>

                        </div>
                    </div>

                </div> :


                <div className="bg-white dark:bg-slate-700 rounded-xl mb-10 transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mx-3">

                    <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Configuración de perfil</h1>

                    <div className='flex md:flex-row flex-col items-center justify-center md:items-start relative gap-16 p-10'>
                        <div className='flex flex-col'>
                            <img className='h-[20vh] rounded-full' src={auth.sexo === "femenino" ? AvatarUsuarioMujer : AvatarUsuarioMasculino} alt={`Avatar usuario`} />
                            {/* <button className="mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleSubmit}>Seleccionar Avatar</button> */}
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
                                        <Select id="enfermedad" placeholder={auth.enfermedad} onChange={e => setNuevaEnfermedad(e.target.value)}>
                                            <option value="" selected disabled hidden>
                                                {auth.enfermedad ? auth.enfermedad : 'Seleccionar'}
                                            </option>
                                            {BDEnfermedades.length ? (BDEnfermedades.map((enfermedad) => (
                                                <option value={enfermedad.nombre} >{enfermedad.nombre}</option>
                                            ))) : 'No has creado ninguna guía aún...'}
                                        </Select>
                                    </div>
                                </div>



                                <div className='mb-5'>
                                    <div className="max-w-md">
                                        <div className="mb-2 block">
                                            <h3 className='font-poppins'>Sexo:</h3>
                                        </div>
                                        <Select id="sexo" placeholder={auth.sexo} onChange={e => setNuevoSexo(e.target.value)}>
                                            <option value="" selected disabled hidden>
                                                {auth.sexo ? auth.sexo : 'Seleccionar'}
                                            </option>
                                            <option value="masculino" >Masculino</option>
                                            <option value="femenino" >Femenino</option>

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
                                                {dias.length ? (dias.map((dia) => (
                                                    <option value={dia} >{dia}</option>
                                                ))) : <option value="" >Seleccionar</option>}
                                            </Select>
                                            <Select id="mes" onChange={e => setNuevoMes(e.target.value)}>
                                                <option value="" selected disabled hidden>Mes</option>
                                                <option value="1">Enero</option>
                                                <option value="2">Febrero</option>
                                                <option value="3">Marzo</option>
                                                <option value="4">Abril</option>
                                                <option value="5">Mayo</option>
                                                <option value="6">Junio</option>
                                                <option value="7">Julio</option>
                                                <option value="8">Agosto</option>
                                                <option value="9">Septiembre</option>
                                                <option value="10">Octuble</option>
                                                <option value="11">Noviembre</option>
                                                <option value="12">Diciembre</option>
                                            </Select>
                                            <Select id="año" onChange={e => setNuevoAno(e.target.value)}>
                                                <option value="" selected disabled hidden>Año</option>
                                                {
                                                    anos.length ? (anos.map((ano) => (
                                                        <option value={ano} >{ano}</option>
                                                    ))) : <option value="" >Seleccionar</option>
                                                }

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
                                            <option value="" selected disabled hidden>
                                                {auth.pais ? auth.pais : 'Seleccionar'}
                                            </option>
                                            <option>Chile</option>
                                            <option>Argentina</option>
                                            <option>Perú</option>
                                            <option>México</option>
                                            <option>Colombia</option>

                                        </Select>
                                    </div>
                                </div>

                                <div className='mb-5'>
                                    <h3 className='font-poppins'>Teléfono:</h3>

                                    <div className='flex gap-3 items-center'>
                                        <Select id="countryCode" className="w-32" onChange={e => setNuevoCountryCode(e.target.value)}>

                                            <option value={auth.telefono ? auth.telefono.slice(0, 4) : 'Cod.'} selected hidden>
                                                {auth.telefono ? auth.telefono.slice(0, 4) : 'Cod.'}
                                            </option>
                                            <option value="+569">+569</option>
                                            <option value="+591">+591</option>

                                        </Select>
                                        <TextInput id="whatsapp" name="whatsapp" type="number" sizing="md" placeholder={auth.telefono ? auth.telefono.slice(4) : 'Ingresar teléfono'} value={nuevoNumero} onChange={e => setNuevoNumero(e.target.value)} className='font-poppins w-full' />
                                    </div>
                                </div>

                            </form>
                            {msg && <Alerta alerta={alerta} />}

                            <button className="block w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleSubmit}>
                                {botonCargando ? <Spinner color="purple" aria-label="Default status example" /> : <>Guardar Cambios</>}
                            </button>

                        </div>
                    </div>

                </div>

            }



        </>
    )
}

export default ConfiguracionPerfil
