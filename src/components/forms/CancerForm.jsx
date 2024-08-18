import {clienteAxios} from "../../config/clienteAxios.jsx";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom"

import { Form, useFieldAnswer, useCurrentBlock, useFormAnswers } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
// import "./styles.css";

import datosGeneralesFormulario from "../../formularios/datosGenerales.js";
import cancerPulmonFormulario from "../../formularios/cancerPulmon.js";
import tiposDeCancer from "../../formularios/tiposDeCancer.js";
import otroTipoDeCancerForm from "../../formularios/otroTipoDeCancer.js";
import metastasisForm from "../../formularios/metastasisForm.js";
import siTuvoCirugia from "../../formularios/cirugiaafirmativo.js";
import tratamientos from "../../formularios/tratramientos.js";
import ecogForm from "../../formularios/ecog.js";
import seleccionGuias from "../../formularios/guiasSeleccion.js";
import terminosForm from "../../formularios/terminosYcondiciones.js";
import tratamientoDespues from "../../formularios/tratamientoDespues.js";



const CancerForm = () => {

    // Importamos Hooks
    const navigate = useNavigate();

    // Extraemos el usuario del Hook useAuth
    const { auth } = useAuth()
    const userId = auth._id
    const nombre = { 'value': auth.nombre }
    const email = { 'value': auth.email }

    // #region Consultamos si el usuario está loggeado
    // Revisamos si el usuario está loggeado consultando al servidor
    useEffect(() => {

        const consultarLoggedUser = async () => {
            // Revisamos si hay token de sesión en Local host
            const token = localStorage.getItem('token')
            if (!token) {
                console.log('Usuario no autorizado')
                navigate('/app')
                return
            }

            // Definimos la configuración para hacer una consulta a la api
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            // Consultamos la API si el usuario existe
            try {
                const { data } = await clienteAxios.get(`/usuarios/perfil`, config)
                const userServerId = data._id
                if (userId !== userServerId) {
                    console.log('Usuario no autorizado')
                    navigate('/app')
                    return
                }
            } catch (error) {
                console.log(error)
            }
        }
        consultarLoggedUser()
    }, [])
    // #endregion


    // #region configuración de formulario
    const enfermedad = useFieldAnswer("enfermedad");
    const tuvoCirugia = useFieldAnswer("cirugia");
    const recibioTratamiento = useFieldAnswer("tratamiento");
    const cuandoTratamiento = useFieldAnswer("cirugia-antes-o-despues");

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserpassword] = useState('')
    const autoLoginUrl = `/form-auto-login/${userEmail}/${userPassword}`


    const [mensajeFinal, setMensajeFinal] = useState(`En poco recibirás tus guías.\n\nRevisa tu correo y whatsapp.\n\n\n\n
  // <a class="renderer-core-button css-ai2jtz" href="/">Ir a inicio<svg class="renderer-core-arrow-icon css-1aucf1m" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></a>`)
    //#endregion



    return (
        <div style={{ width: "100%", height: "100vh", background: "red" }}>

            <Form
                formId="1"
                formObj={{
                    FormMessages: {
                        block: {
                            dropdown: {
                                placeholder: "Carajo"
                            }
                        }
                    },
                    blocks: [

                        // Sección 1: Pantalla de bienvenida
                        {
                            name: "welcome-screen",
                            id: "bienvenida",
                            attributes: {
                                label: `Hola ${nombre.value}.`,
                                description: "¡Comienza a crear tus guías acá!",
                                attachment: {
                                    type: "image",
                                    url:
                                        "https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg"
                                },
                                attachmentMaxWidth: "700px",
                                buttonText: "Comenzar",
                            }
                        },

                        // Sección 2: Opciones de enfermedad
                        tiposDeCancer,

                        // Sección 3: Formularios de tipo de cáncer
                        ...(enfermedad?.includes("otro") ? otroTipoDeCancerForm : []),
                        ...(enfermedad?.includes("cancer-pulmon") ? cancerPulmonFormulario : []),

                        // Sección 4: datos Generales
                        datosGeneralesFormulario,

                        // Sección 5: Estado del paciente
                        metastasisForm,

                        // Sección 6: Cirugía
                        {
                            name: "dropdown",
                            id: "cirugia",
                            attributes: {
                                required: true,
                                attachment: {
                                    type: "image",
                                    url:
                                        "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
                                },
                                choices: [
                                    {
                                        label: "Si",
                                        value: "si-cirugia"
                                    },
                                    {
                                        label: "No",
                                        value: "no-cirugia"
                                    },
                                ],
                                label: "¿Se le ha realizado alguna cirugía relacionada al cáncer?",
                                nextBtnLabel: "Siguiente",
                                layout: "split-right"
                            }
                        },

                        ...(tuvoCirugia?.includes("si") ? siTuvoCirugia : []),


                        // Sección 7: Tratamientos del paciente
                        {
                            name: "dropdown",
                            id: "tratamiento",
                            attributes: {
                                attachment: {
                                    type: "image",
                                    url:
                                        "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
                                },
                                choices: [
                                    {
                                        label: "Si",
                                        value: "si-tratamiento"
                                    },
                                    {
                                        label: "No",
                                        value: "no-tratamiento"
                                    },
                                ],
                                label: "¿Ha recibido tratamiento para el cáncer?",
                                nextBtnLabel: "Siguiente",
                                layout: "split-right",
                                required: true,
                            }
                        },

                        ...(recibioTratamiento?.includes("si") ? tratamientos : []),
                        ...(cuandoTratamiento?.includes("despues") ? tratamientoDespues : []),

                        // Sección 8: ECOG
                        ecogForm,

                        // Sección 9: Mensaje
                        {
                            name: "statement",
                            id: "mensaje1",
                            attributes: {
                                label: "Muy bien, ya casi terminamos!",
                                buttonText: "Continuar",
                                quotationMarks: true
                            }
                        },

                        // Sección 10: Selección de guías
                        seleccionGuias,

                        // Sección 11: Mensaje
                        {
                            name: "statement",
                            id: "mensaje2",
                            attributes: {
                                label: "Recibirás tus guías por correo y whatsapp",
                                buttonText: "Continuar",
                                quotationMarks: true
                            }
                        },

                        // Sección 12: teléfono con whatsapp para enviar guía
                        {
                            id: "telefono",
                            name: "short-text",
                            attributes: {
                                type: "number",
                                "setMaxCharacters": true, // Default: false
                                "maxCharacters": 12,
                                label: "Número de teléfono con whatsapp:",
                                required: true,
                                placeholder: "+56"
                            }
                        },

                        // Sección 13: Términos y condiciones
                        terminosForm

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
                        'label.submitBtn': 'Crear guías',
                        'label.hintText.key': '✓',
                        'label.button.ok': 'Siguiente',
                        'label.errorAlert.maxCharacters': 'Excede el largo permitido',
                        'label.errorAlert.email': 'Email inválido',
                        'block.email.placeholder': 'Escribe acá...',

                        'block.defaultThankYouScreen.label': `En poco recibirás tus guías.\n\nRevisa tu correo y whatsapp.\n\n\n\n<a class="renderer-core-button css-ai2jtz" href=${autoLoginUrl}>Ir a inicio<svg class="renderer-core-arrow-icon css-1aucf1m" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></a>`
                    }
                }}

                // Enviamos el formulario
                onSubmit={(data, { completeForm, setIsSubmitting }) => {

                    const datosFormulario = data

                    async function submit(info) {
                        info.answers.nombre = nombre
                        info.answers.email = email
                        try {
                            // Enviamos el formulario al sistema de usuarios, guias y whatsapp
                            const formulario = await clienteAxios.post(`/formularioGuias/cancer`, info.answers)
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

export default CancerForm;
