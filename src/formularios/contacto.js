const contacto = {
    id: "datos-contacto",
    name: "group",
    attributes: {
        label: "Responde las siguientes preguntas",
        nextBtnLabel: "Siguiente"
    },
    innerBlocks: [
        {
            id: "nombre",
            name: "short-text",
            attributes: {
                type: "number",
                "setMaxCharacters": true, // Default: false
                "maxCharacters": 35,
                label: "¿Cuál es tu nombre?",
                required: true,
                placeholder: "Escribe acá..."
            }
        },
        {
            name: "email",
            id: "email",
            attributes: {
                required: true,
                label: "Email:"
            }
        },
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


    ]
}

export default contacto