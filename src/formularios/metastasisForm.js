const metastasisForm = {
    name: "dropdown",
    id: "metastasis",
    attributes: {
        attachment: {
            type: "image",
            url:
                "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
        },
        choices: [
            {
                label: "Si",
                value: "true"
            },
            {
                label: "No",
                value: "false"
            },
        ],
        label: "¿El cáncer se ha extendido a otros órganos?",
        nextBtnLabel: "Siguiente",
        layout: "split-right",
        required: true
    }
}

export default metastasisForm