import React from 'react'

const CardGuia = ({ nombre, guia_nombre_display, fecha, url, url_preview_img, created, descripcion }) => {
    return (
        <>
            {created ?
                <div className="inline-block w-60 m-2 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                    <img className="h-40 object-cover rounded-xl" src={url_preview_img} alt="" />
                    <div className="p-2">

                        <h2 className="font-poppins font-bold text-lg mb-2 ">{guia_nombre_display}</h2>

                        <p className='my-5'>{descripcion}</p>

                        <p className="font-poppins font-medium text-sm text-gray-600">Paciente: <span className='font-extrabold'>{nombre}</span></p>
                        <p className="font-poppins font-medium text-sm text-gray-600">Creado: <span className='font-extrabold'>{fecha}</span></p>
                    </div>

                    <div className="m-2 items-center">
                        <a role='button' href={url} target="_blank" className="block  px-3 py-1  w-full text-center text-sm font-poppins font-medium bg-gradient-to-r from-indigo-800 to-indigo-950 hover:from-indigo-900 hover:to-indigo-950 text-white rounded-full transition">Ver guía</a>
                        <a role='button' href={url} target="_blank" className="block  px-3 py-1  w-full text-center text-sm font-poppins font-medium bg-gradient-to-r from-indigo-800 to-indigo-950 hover:from-indigo-900 hover:to-indigo-950 text-white rounded-full transition mt-2">Crear nueva</a>
                    </div>
                </div> :
                
                <div className="inline-block w-60 m-2 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                    <img className="h-40 object-cover rounded-xl" src={url_preview_img} alt="" />
                    <div className="p-2">

                        <h2 className="font-poppins font-bold text-lg mb-2 ">{guia_nombre_display}</h2>
                        <p className="text-sm text-gray-600">Guía no creada</p>
                        <p className='my-5'>{descripcion}</p>
                    </div>

                    <div className="m-2">
                        <a role='button' href={url} target="_blank" className="block  px-3 py-1  w-full text-center text-sm font-poppins font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition mt-2">Crear Guía</a>
                    </div>
                </div>
            }
        </>
    )
}

export default CardGuia
