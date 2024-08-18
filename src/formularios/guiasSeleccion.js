const seleccionGuias = {
    name: "multiple-choice",
    id: "guiasSeleccionadas",
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
        label: "Selecciona las guías que te gustaría recibir",
        choices: [
            {
                label: "Información de la enfermedad",
                value: "info-general"
            },
            {
                label: "Nutrición",
                value: "nutricion"
            },
            {
                label: "Leyes y acceso a tratamiento",
                value: "legal"
            },
            {
                label: "Apoyo psicológico",
                value: "apoyo"
            }
        ]
    }
}


export default seleccionGuias