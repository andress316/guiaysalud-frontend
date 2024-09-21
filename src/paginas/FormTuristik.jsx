import axios from "axios";
import { useState } from "react";

import { Form, useFieldAnswer, useCurrentBlock, useFormAnswers } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
// import "./styles.css";

import datosGeneralesFormulario from "../formularios/datosGenerales.js";
import cancerPulmonFormulario from "../formularios/cancerPulmon.js";
import tiposDeCancer from "../formularios/tiposDeCancer.js";
import otroTipoDeCancerForm from "../formularios/otroTipoDeCancer.js";
import metastasisForm from "../formularios/metastasisForm.js";
import siTuvoCirugia from "../formularios/cirugiaafirmativo.js";
import tratamientos from "../formularios/tratramientos.js";
import ecogForm from "../formularios/ecog.js";
import seleccionGuias from "../formularios/guiasSeleccion.js";
import contacto from "../formularios/contacto.js";
import terminosForm from "../formularios/terminosYcondiciones.js";
import tratamientoDespues from "../formularios/tratamientoDespues.js";
import cancerMamaFormulario from "../formularios/cancerDeMama.js";

import getAuthToken from "../utils/AuthToken.js";

import foto from "../assets/formTuristik.jpg"


registerCoreBlocks();


const FormTuristik = () => {

    const enfermedad = useFieldAnswer("enfermedad");
    const tuvoCirugia = useFieldAnswer("cirugia");
    const recibioTratamiento = useFieldAnswer("tratamiento");
    const cuandoTratamiento = useFieldAnswer("cirugia-antes-o-despues");

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserpassword] = useState('')
    const autoLoginUrl = `/form-auto-login/${userEmail}/${userPassword}`


    const [mensajeFinal, setMensajeFinal] = useState(`En poco recibirás tus guías.\n\nRevisa tu correo y whatsapp.\n\n\n\n
  // <a class="renderer-core-button css-ai2jtz" href="/">Ir a inicio<svg class="renderer-core-arrow-icon css-1aucf1m" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></a>`)



    return (
        <div style={{ width: "100%", height: "100vh", background: "red" }}>

            <Form
                formId="1"
                formObj={{
                    FormMessages: {
                        block: {
                            dropdown: {
                                placeholder: "Bienvenido"
                            }
                        }
                    },
                    blocks: [
                        // Sección 1: Pantalla de bienvenida
                        {
                            name: "welcome-screen",
                            id: "bienvenida",
                            attributes: {
                                label: `¡Comienza tu viaje acá!`,
                                description: "Compra los tickets de Teleférico Santiago",
                                attachmentMaxWidth: "700px",
                                buttonText: "Comenzar",
                            }
                        },

                        {
                            id: "inicio",
                            name: "group",
                            attributes: {
                                label: "Responde las siguientes preguntas",
                                nextBtnLabel: "Siguiente",
                                layout: "split-left",
                                attachment: {
                                    type: "image",
                                    url:`${foto}`
                                },
                            },
                            innerBlocks: [
                                {
                                    name: "dropdown",
                                    id: "inicio",
                                    attributes: {
                                        choices: [
                                            {
                                                label: "Oasis",
                                                value: "oasis"
                                            },
                                            {
                                                label: "Tupahue",
                                                value: "tupahue"
                                            },
                                            {
                                                label: "Cumbre",
                                                value: "cumbre"
                                            },
                                        ],
                                        label: "Selecciona donde comenzar tu viaje",
                                        description: "Selecciona la estación donde comenzarás el viaje.",
                                        required: true,
                                    }
                                },
                                {
                                    name: "dropdown",
                                    id: "final",
                                    attributes: {
                                        choices: [
                                            {
                                                label: "Oasis",
                                                value: "oasis"
                                            },
                                            {
                                                label: "Tupahue",
                                                value: "tupahue"
                                            },
                                            {
                                                label: "Cumbre",
                                                value: "cumbre"
                                            },

                                        ],
                                        label: "Selecciona dónde quieres llegar.",
                                        description: "Selecciona la estación final de tu destino.",
                                        required: true
                                    }
                                }
                            ]
                        },

                        {
                            id: "datos-cirugia",
                            name: "group",
                            attributes: {
                                description: "Selecciona los detalles para tu ticket.",
                                label: "Selecciona la fecha y hora de tu viaje",
                                nextBtnLabel: "Siguiente"
                            },
                            innerBlocks: [
                                {
                                    name: "date",
                                    id: "fecha",
                                    attributes: {
                                        "format": "DDMMYYYY",
                                        "separator": "/",
                                        required: true,
                                        label: "Ingresa la fecha de tu ticket.",
                                        placeholder: "Día - Mes - Año"
                                    }
                                },
                                {
                                    name: "dropdown",
                                    id: "final",
                                    attributes: {
                                        choices: [
                                            {
                                                label: "10:00",
                                                value: "10"
                                            },
                                            {
                                                label: "11:00",
                                                value: "11"
                                            },
                                            {
                                                label: "12:00",
                                                value: "12"
                                            },

                                        ],
                                        label: "Selecciona el horario.",
                                        required: true
                                    }
                                }
                            ]
                        },

                        {
                            id: "pasajeros",
                            name: "group",
                            attributes: {
                                label: "Responde las siguientes preguntas",
                                nextBtnLabel: "Siguiente",
                                layout: "split-left",
                                attachment: {
                                    type: "image",
                                    url:`${foto}`
                                },
                            },
                            innerBlocks: [
                                {
                                    name: "dropdown",
                                    id: "adultos",
                                    attributes: {
                                        choices: [
                                            {
                                                label: "1",
                                                value: "1"
                                            },
                                            {
                                                label: "2",
                                                value: "2"
                                            },
                                            {
                                                label: "3",
                                                value: "3"
                                            },
                                        ],
                                        label: "Selecciona el número de pasajeros adultos:",
                                        required: true,
                                    }
                                },
                                {
                                    name: "dropdown",
                                    id: "niños",
                                    attributes: {
                                        choices: [
                                            {
                                                label: "0",
                                                value: "0"
                                            },
                                            {
                                                label: "1",
                                                value: "1"
                                            },
                                            {
                                                label: "2",
                                                value: "2"
                                            },

                                        ],
                                        label: "Seleccione el número de pasajeros niños:",
                                        required: true
                                    }
                                }
                            ]
                        },



                        {
                            name: "multiple-choice",
                            id: "pasaje",
                            attributes: {
                                layout: "split-right",
                                attachment: {
                                    type: "image",
                                    url:
                                        "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
                                },
                                required: true,
                                multiple: true,
                                verticalAlign: false,
                                label: "Selecciona el tipo de pasaje que necesita",
                                choices: [
                                    {
                                        label: "Solo Ida",
                                        value: "ida"
                                    },
                                    {
                                        label: "Ida y Vuelta",
                                        value: "idaVuelta"
                                    },
                                    {
                                        label: "Vive el Parque (Transporte completo 24 hrs.)",
                                        value: "viveelparque"
                                    }
                                ]
                            }
                        },

                        {
                            name: "statement",
                            id: "mensaje2",
                            attributes: {
                                label: "¡Ya casi finalizamos!",
                                buttonText: "Continuar a pago",
                                quotationMarks: true
                            }
                        },
                        

                    ],
                    settings: {
                        animationDirection: "vertical",
                        disableWheelSwiping: false,
                        disableNavigationArrows: false,
                        disableProgressBar: false
                    },
                    theme: {
                        font: "Roboto",
                        buttonsBgColor: "#9b51e0",
                        logo: {
                            src: ""
                        },
                        questionsColor: "#000",
                        answersColor: "#0aa7c2",
                        buttonsFontColor: "#fff",
                        buttonsBorderRadius: 25,
                        errorsFontColor: "#fff",
                        errorsBgColor: "#f00",
                        progressBarFillColor: "#000",
                        progressBarBgColor: "#ccc",
                        backgroundColor: "#130a2b",
                        questionsColor: "white",
                        answersColor: "white"
                    },
                    messages: {
                        'label.hintText.enter': "Presiona <strong>Enter ↵</strong> para avanzar.",
                        'block.longText.hint': '<strong>Shift ⇧ + Enter ↵</strong> para salto de línea.',
                        'block.dropdown.placeholder': "Seleccionar",
                        'label.errorAlert.required': 'Este campo es obligatorio',
                        'label.errorAlert.selectionRequired': 'Seleccionar una opción',
                        'label.submitBtn': 'Finalizar pago',
                        'label.hintText.key': '✓',
                        'label.button.ok': 'Siguiente',
                        'label.errorAlert.maxCharacters': 'Excede el largo permitido',
                        'label.errorAlert.email': 'Email inválido',
                        'block.email.placeholder': 'Escribe acá...',

                        'block.defaultThankYouScreen.label': `${mensajeFinal === 'Usuario ya existente.' ? 'Usuario ya existente.\n\nDebes iniciar sesión para crear nuevas guías.\n\n\n\n<a class="renderer-core-button css-ai2jtz" href="/login">Iniciar Sesión<svg class="renderer-core-arrow-icon css-1aucf1m" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></a>' : `En poco recibirás tus guías.\n\nRevisa tu correo y whatsapp.\n\n\n\n<a class="renderer-core-button css-ai2jtz" href=${autoLoginUrl}>Ir a inicio<svg class="renderer-core-arrow-icon css-1aucf1m" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></a>`}`
                    }
                }}

                // Enviamos el formulario
                onSubmit={(data, { completeForm, setIsSubmitting }) => {







                    const datosFormulario = data

                    // Agregamos datos necesarios para crear usuarios al objeto de respuestas
                    datosFormulario.answers.password = Math.random().toString(36).toUpperCase().slice(-8)
                    datosFormulario.answers.nombreFormulario = 'campañas'

                    async function submit(info) {
                        setUserEmail(info.answers.email.value)
                        setUserpassword(info.answers.password)
                        try {



                            const tokenAPI = await getAuthToken(); // Obtén el token usando la función
                            //localStorage.setItem('tokenAPI', tokenAPI);

                            console.log(tokenAPI)

                            const configWithTokenAPI = {
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: tokenAPI
                                }
                            }


                            // Enviamos el formulario al sistema de usuarios, guias y whatsapp
                            // const url = 'https://webhook.site/cf6df4e4-34a6-41a4-8ce0-dbdfca53e6ae'
                            // const url = 'http://20.3.128.39'

                            const url = 'http://172.206.55.212:4003/api/v1/guides'
                            console.log(url)
                            console.log(info.answers)
                            const formulario = await axios.post(url, info.answers, configWithTokenAPI)
                            // const formulario = await axios.post(`http://localhost:3500/api/formularioGuias/cancer`, info.answers)
                            console.log(formulario)
                            setMensajeFinal(formulario.data.msg)

                            await setIsSubmitting(false);
                            await completeForm();
                        } catch (error) {
                            console.log(error)
                        }
                    }
                    submit(datosFormulario)
                }}
            />
        </div>
    );
};

export default FormTuristik;
