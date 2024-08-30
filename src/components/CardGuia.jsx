import React from 'react'
import { Link } from 'react-router-dom'

const CardGuia = ({ nombre, guia_nombre_display, fecha, url, url_preview_img, created, descripcion }) => {
    return (
        <>
            {created ?
                <div className="inline-block w-60 m-2 p-2 bg-white dark:bg-slate-800 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                    <img className="h-40 object-cover rounded-xl" src={url_preview_img} alt="" />
                    <div className="p-2">

                        <h2 className="font-poppins font-bold text-lg mb-2 ">{guia_nombre_display}</h2>

                        <p className='my-5'>{descripcion}</p>

                        <p className="font-poppins font-medium text-sm text-gray-600 dark:text-gray-500">Paciente: <span className='font-extrabold'>{nombre}</span></p>
                        <p className="font-poppins font-medium text-sm text-gray-600 dark:text-gray-500">Creado: <span className='font-extrabold'>{fecha}</span></p>
                    </div>

                    <div className="m-2 items-center">
                        <Link role='button' href={url} target="_blank" className="block  px-3 py-1  w-full text-center text-sm font-poppins font-medium bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-pink-500 hover:to-purple-700 text-white rounded-full transition">Ver guía</Link>
                        <Link role='button' href={url} target="_blank" className="block px-3 py-1 w-full text-center text-xs font-poppins font-regular dark:text-white hover:text-pink-500 rounded-full transition mt-2">Crear nueva</Link>
                    </div>
                </div> :
                
                <div className="inline-block w-60 m-2 p-2 bg-white dark:bg-slate-800 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                    <img className="h-40 object-cover rounded-xl" src={url_preview_img} alt="" />
                    <div className="p-2">

                        <h2 className="font-poppins font-bold text-lg mb-2 ">{guia_nombre_display}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Guía no creada</p>
                        <p className='my-5'>{descripcion}</p>
                    </div>

                    <div className="m-2">
                        <Link role='button' href={url} target="_blank" className="block  px-3 py-1  w-full text-center text-sm font-poppins font-medium bg-gradient-to-r from-pink-500 to-purple-700 hover:from-pink-600 hover:to-purple-700 text-white rounded-full transition mt-2">Crear Guía</Link>
                    </div>
                </div>
            }
        </>
    )
}

export default CardGuia
