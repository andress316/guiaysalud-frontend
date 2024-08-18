const siTuvoCirugia = [
    {
      id: "datos-cirugia",
      name: "group",
      attributes: {
        description: "Puedes ingresar una fecha estimada y una breve descripción.",
        label: "Responde las siguientes preguntas",
        nextBtnLabel: "Siguiente",
        layout: "split-left",
        attachment: {
          type: "image",
          url:
            "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
        },
      },
      innerBlocks: [
        {
          name: "date",
          id: "fechaCirugia",
          attributes: {
            "format": "DDMMYYYY",
            "separator": "/",
            required: true,
            label: "Ingresa la fecha de la cirugía.",
            placeholder:"Día - Mes - Año"
          }
        },
        {
          name: "long-text",
          id: "detallesCirugia",
          'label.errorAlert.required': 'Este campo es obligatorio',
          attributes: {
            attachment: {
              type: "image",
              url:
                "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
            },
            required: true,
            label: "Describe brevemente los detalles de la cirugía.",
            placeholder: "Escribe acá...",
          }
        }
      ]
    }
  ]

  export default siTuvoCirugia