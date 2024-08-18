const tratamientos = [{
    name: "multiple-choice",
    id: "tratamientosDelPaciente",
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
        label: "¿Qué tratamientos ha recibido el paciente?",
        choices: [
            {
                label: "Quimioterapia",
                value: "quimioterapia"
            },
            {
                label: "Radioterapia",
                value: "radioterapia"
            },
            {
                label: "Inmunoterapia",
                value: "inmunoterapia"
            },
            {
                label: "Terapia Hormonal",
                value: "terapia-hormonal"
            },
            {
                label: "Terapia Dirigida",
                value: "terapia-dirigida"
            },
            {
                label: "No estoy seguro/a",
                value: "inseguro"
            }
        ]
    }
},
{
    name: "dropdown",
    id: "cirugia-antes-o-despues",
    attributes: {
        attachment: {
            type: "image",
            url:
                "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
        },
        choices: [
            {
                label: "Antes de la cirugía",
                value: "antes"
            },
            {
                label: "Después de la cirugía",
                value: "despues"
            }
        ],
        label: "¿El tratamiento se realizo antes o después de la cirugía?",
        nextBtnLabel: "Siguiente",
        layout: "split-right",
        required: true
    }
}


]


export default tratamientos