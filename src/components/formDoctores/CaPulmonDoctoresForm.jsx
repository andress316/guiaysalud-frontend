import { useState } from "react"
import { Label, Select, TextInput, Checkbox } from "flowbite-react";

const CaPulmonDoctoresForm = () => {
    const [tipoCaPulmon, setTipoCaPulmon] = useState("")
    const [tipoHistologico, setTipoHistologico] = useState("")
    const [etapa, setEtapa] = useState("")
    const [candidatoCirugia, setCandidatoCirugia] = useState("")
    const [pdl1, setPdl1] = useState("")
    const [terapiaSistemica, setTerapiaSistemica] = useState("")
    const [metastasisCerebral, setMetastasisCerebral] = useState("")
    const [irradiacion, setIrradiacion] = useState("")
    const [ecog, setEcog] = useState("")

    const [email, setEmail] = useState("")
    const [nombrePaciente, setNombrePaciente] = useState("")
    const [nombreDoctor, setNombreDoctor] = useState("")
    const [telefono, setTelefono] = useState("")

    const [egfr, setEgfr] = useState(false)
    const [ros1, setRos1] = useState("")
    const [alk, setAlk] = useState("")
    const [sinMutacion, setSinMutacion] = useState("")

    const [adenocarcinoma, setAdenocarcinoma] = useState("")

    const handleCaPulmonForm = (e) => {
        e.preventDefault()
        const form = {
            enfermedad: "66c10c7e6de66bf2fce185e5",
            tipoCaPulmon,
            tipoHistologico,
            etapa,
            candidatoCirugia,
            pdl1,
            mutaciones: {
                egfr, ros1, alk, sinMutacion
            },
            terapiaSistemica,
            irradiacion,
            ecog,
            email,
            nombrePaciente,
            nombreDoctor,
            telefono
        }
        console.log(form)
    }
    return (

        <>
            <form action="" onSubmit={handleCaPulmonForm}>
                <div className="w-full items-center">
                    <div className="flex flex-col  mx-auto mb-20 overflow-hidden dark:bg-slate-700 bg-white rounded-xl transform transition-all p-10 hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                        <div className="mb-2 block">
                            <Label htmlFor="tipo_ca_pulmon" value="Tipo de cáncer de pulmón" />
                        </div>
                        <Select id="tipo_ca_pulmon" required onChange={e => setTipoCaPulmon(e.target.value)}>
                            <option value="" selected disabled hidden>Seleccionar</option>
                            <option value="celulasPequeñas">Células Pequeñas</option>
                            <option value="celulasNoPequeñas">Células NO Pequeñas</option>
                            <option value="desconocido">Desconocido</option>
                        </Select>

                        <div className="mb-2 mt-5 block">
                            <Label htmlFor="tipo_histologico" value="¿Cuál es la histología?" />
                        </div>
                        <Select id="tipo_histologico" required onChange={e => setTipoHistologico(e.target.value)}>
                            <option value="" selected disabled hidden>Seleccionar</option>
                            <option value="adenocarcinoma">Adenocarcinoma</option>
                            <option value="carcinoma_escamoso">Carcinoma escamoso</option>
                            <option value="tumor_neuroendocrino">Tumor neuroendocrino</option>
                            <option value="carcinoma_neuroendocrino">Carcinoma neuroendocrino</option>
                            <option value="desconocido">Desconocido</option>
                        </Select>

                        <div className="mb-2 mt-5 block">
                            <Label htmlFor="etapa" value="Etapa" />
                        </div>
                        <Select id="etapa" required onChange={e => setEtapa(e.target.value)}>
                            <option value="" selected disabled hidden>Seleccionar</option>
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                            <option value="4">IV</option>
                        </Select>


                        {etapa === "4" || etapa === "" ? "" :
                            <>
                                <div className="mb-2 mt-5 block">
                                    <Label htmlFor="candidato_cirugia" value="¿Es candidato a cirugia de resección?" />
                                </div>
                                <Select id="candidato_cirugia" required onChange={e => setCandidatoCirugia(e.target.value)}>
                                    <option value="" selected disabled hidden>Seleccionar</option>
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                    <option value="2">Falta informacion para determinar</option>
                                </Select>
                            </>
                        }



                        <div className="mb-2 mt-5 block">
                            <Label htmlFor="pdl1" value="¿Cual es el nivel de PDL1?" />
                        </div>
                        <Select id="pdl1" required onChange={e => setPdl1(e.target.value)}>
                            <option value="" selected disabled hidden>Seleccionar</option>
                            <option value="0">Negativo</option>
                            <option value="1">Positivo</option>
                        </Select>


                        <div className="mb-2 mt-5 block">
                            <Label htmlFor="mutaciones" value="¿Cuenta con alguna de las siguientes mutaciones?" />
                        </div>

                        <div className="flex mt-5 items-center gap-2">
                            <Checkbox id="egfr" onClick={e => setEgfr(true)} />
                            <Label htmlFor="egfr" className="flex">
                                EGFR
                            </Label>
                        </div>
                        <div className="flex mt-5 items-center gap-2">
                            <Checkbox id="ros1" onChange={e => setRos1(true)} />
                            <Label htmlFor="ros1" className="flex">
                                ROS 1
                            </Label>
                        </div>
                        <div className="flex mt-5 items-center gap-2">
                            <Checkbox id="alk" onChange={e => setAlk(true)} />
                            <Label htmlFor="alk" className="flex">
                                ALK
                            </Label>
                        </div>
                        <div className="flex mt-5 items-center gap-2">
                            <Checkbox id="sinMutacion" onChange={e => setSinMutacion(true)} />
                            <Label htmlFor="sinMutacion" className="flex" >
                                Sin Mutaciones Driver
                            </Label>
                        </div>


                        {etapa !== "4" || etapa === "" ? "" :
                            <>
                                <div className="mb-2 mt-5 block">
                                    <Label htmlFor="terapia_sistemica" value="¿Ha recibido terapia sistémica?" />
                                </div>
                                <Select id="terapia_sistemica" required onChange={e => setTerapiaSistemica(e.target.value)}>
                                    <option value="" selected disabled hidden>Seleccionar</option>
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </Select>

                                <div className="mb-2 mt-5 block">
                                    <Label htmlFor="metastasis_cerebral" value="¿Tiene metástasis cerebral?" />
                                </div>
                                <Select id="metastasis_cerebral" required onChange={e => setMetastasisCerebral(e.target.value)}>
                                    <option value="" selected disabled hidden>Seleccionar</option>
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </Select>
                            </>
                        }

                        {metastasisCerebral !== "si" || metastasisCerebral === "" ? "" :
                            <>
                                <div className="mb-2 mt-5 block">
                                    <Label htmlFor="irradiacion" value="¿Ha recibido irradiación?" />
                                </div>
                                <Select id="irradiacion" required onChange={e => setIrradiacion(e.target.value)}>
                                    <option value="" selected disabled hidden>Seleccionar</option>
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </Select>
                            </>




                        }

                        <div className="mb-2 mt-5 block">
                            <Label htmlFor="ecog" value="¿Cuál es el ECOG estimado?" />
                        </div>
                        <Select id="irradiacion" required onChange={e => setEcog(e.target.value)}>
                            <option value="" selected disabled hidden>Seleccionar</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Select>


                        <div>
                            <div className="mb-2 mt-5 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required onChange={e => setEmail(e.target.value)} />
                        </div>


                        <div>
                            <div className="mb-2 mt-5 block">
                                <Label htmlFor="nombrePaciente" value="Nombre del Paciente" />
                            </div>
                            <TextInput id="nombrePaciente" type="text" required onChange={e => setNombrePaciente(e.target.value)} />
                        </div>

                        <div>
                            <div className="mb-2 mt-5 block">
                                <Label htmlFor="nombreDoctor" value="Nombre del Doctor" />
                            </div>
                            <TextInput id="nombreDoctor" type="text" required onChange={e => setNombreDoctor(e.target.value)} />
                        </div>

                        <div>
                            <div className="mb-2 mt-5 block">
                                <Label htmlFor="telefono" value="Teléfono de contacto" />
                            </div>
                            <TextInput id="telefono" type="number" required onChange={e => setTelefono(e.target.value)} />
                        </div>



                        <button className="block w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" type="submit">
                            Continuar
                        </button>

                    </div>
                </div>
            </form>
        </>
    )
}

export default CaPulmonDoctoresForm
