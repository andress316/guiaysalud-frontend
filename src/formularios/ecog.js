const ecogForm = {
    id: "ecog",
    name: "group",
    attributes: {
        label: "Responde las siguientes preguntas",
        nextBtnLabel: "Siguiente"
    },
    innerBlocks: [
        {
            name: "dropdown",
            id: "dolor-sintomas",
            attributes: {
                choices: [
                    {
                        label: "No tengo dolor",
                        value: "1"
                    },
                    {
                        label: "Dolores leves",
                        value: "2"
                    },
                    {
                        label: "Dolores Tolerables",
                        value: "3"
                    },
                    {
                        label: "Dolores Graves",
                        value: "4"
                    },
                    {
                        label: "Dolores Muy Graves",
                        value: "5"
                    }
                ],
                label: "¿Le causa dolor alguno de los síntomas?",
                required: true,
            }
        },
        {
            name: "dropdown",
            id: "descanso-en-cama",
            attributes: {
                choices: [
                    {
                        label: "Solo en la noche",
                        value: "1"
                    },
                    {
                        label: "En la noche y parte del día",
                        value: "2"
                    },
                    {
                        label: "En la noche y varias horas del día",
                        value: "3"
                    },
                    {
                        label: "En la noche y casi todo el día",
                        value: "4"
                    },
                    {
                        label: "Todo el día",
                        value: "5"
                    }
                ],
                label: "¿Cuánto tiempo del día necesita descansar en cama?",
                required: true,
            }
        },
        {
            name: "dropdown",
            id: "actividad-diaria",
            attributes: {
                choices: [
                    {
                        label: "No necesito ayuda",
                        value: "1"
                    },
                    {
                        label: "Necesito poca ayuda",
                        value: "2"
                    },
                    {
                        label: "Necesito ayuda regularmente",
                        value: "3"
                    },
                    {
                        label: "Necesito mucha ayuda",
                        value: "4"
                    },
                    {
                        label: "Dependo totalmente de ayuda",
                        value: "5"
                    }
                ],
                label: "¿Cuánta ayuda necesita para realizar sus actividades diarias?",
                required: true,
            }
        },
        
        
    ]
}

export default ecogForm