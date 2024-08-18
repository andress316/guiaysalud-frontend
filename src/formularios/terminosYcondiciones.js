const terminosForm =
{
    name: "dropdown",
    id: "terminos",
    attributes: {
        required: true,
        choices: [
            {
                label: "Si acepto",
                value: "si-acepto"
            }
        ],
        label: "¿Aceptas los términos y condiciones?",
        description: `Guía y Salud tiene el objetivo de educar y guíar a pacientes sobre sus enfermedades, de ninguna forma remplazan una consulta médica o la opinión de un especialista, revisa los <a href="https://www.vitzana.com" target="_blank" style="color:#9b51df;text-align:center">Términos y condiciones</a> y selecciona la opción "Si acepto" para recibir las guías que solicitas, de otra forma puedes cerrar esta ventana.`

    }
}

export default terminosForm