import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Tabs, Label, Select } from "flowbite-react";
import BDEnfermedades from "../../../extras/bd-enfermedades.json"
import CaPulmonDoctoresForm from '../components/formDoctores/CaPulmonDoctoresForm';

const FormularioDoctores = () => {
    const [enfermedad, setEnfermedad] = useState("")




    return (
        <>
            <div className='flex px-5 pt-36 md:py-10 flex-col items-center relative'>
                <h1 className="text-center lg:text-5xl xl:text-6xl text-4xl mb-4 font-black text-indigo-900 dark:text-white lg:pr-5 font-poppins">Buscar <span className="text-pink-500 dark:text-pink-500">Estudios Clínicos</span></h1>
                <p className="font-poppins text-indigo-900 dark:text-white dark:text-gray100 md:text-2xl text-xl text-center">Recibe el resultado por whatsapp</p>
                <Link to="/form" className="font-poppins font-medium text-md mt-2 text-gray-400 hover:text-pink-500">¿No eres doctor?</Link>
            </div>



            <div className='flex flex-col md:flex-row justify-center'>
                <Tabs className="flex justify-center" aria-label="Tabs with icons" variant="underline">
                    <Tabs.Item active title="Oncología">

                        <div className="mb-5 mx-auto mt-5 md:mb-10 items-start relative">


                            <div className="w-full mb-10">
                                <div className="mb-2 block">
                                    <Label htmlFor="countries" value="Selecciona el tipo de cáncer" />
                                </div>
                                <Select id="enfermedad" onChange={e => setEnfermedad(e.target.value)}>
                                    <option value="" selected disabled hidden>Seleccionar</option>

                                    {BDEnfermedades.length ? (BDEnfermedades.map((enfermedad) => (
                                        <option value={enfermedad.tipo} >{enfermedad.nombre}</option>
                                    ))) : <option value="" >Seleccionar</option>}
                                </Select>
                            </div>
                        </div>
                        {enfermedad === "cancer-pulmon" ?
                            <CaPulmonDoctoresForm />
                            : ""}
                    </Tabs.Item>
                </Tabs>
            </div>


        </>
    )
}

export default FormularioDoctores
