const tratamientoDespues =[
    {
        name: "dropdown",
        id: "cirugia-despues-de-tratamiento",
        attributes: {
            choices: [
                {
                    label: "3 meses después",
                    value: "3"
                },
                {
                    label: "6 meses después",
                    value: "6"
                },
                {
                    label: "9 meses después",
                    value: "9"
                },
                {
                    label: "1 año después",
                    value: "12"
                },
                {
                    label: "1 año y 6 meses después",
                    value: "18"
                },
                {
                    label: "2 años después",
                    value: "24"
                },
                {
                    label: "Más timpo después",
                    value: "mas"
                }
            ],
            label: "¿Cuánto tiempo después de la cirugía comenzó el tratamiento?",
            nextBtnLabel: "Siguiente",
            description:"Seleccione un periodo de tiempo aproximado.",
            required: true
        }
    }
]

export default tratamientoDespues