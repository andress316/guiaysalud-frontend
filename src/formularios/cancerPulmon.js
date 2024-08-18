const cancerPulmonFormulario = [
  {
    name: "dropdown",
    id: "tipoDeCancerPulmon",
    attributes: {
      attachment: {
        type: "image",
        url:
          "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
      },
      choices: [
        {
          label: "Células Pequeñas",
          value: "celulas-pequeñas"
        },
        {
          label: "Células NO pequeñas",
          value: "celulas-no-pequeñas"
        },
        {
          label: "No estoy seguro",
          value: "no-sabe"
        },
      ],
      label: "¿Selecciona tu tipo de cáncer de pulmón?",
      nextBtnLabel: "Siguiente",
      layout: "split-right",
      required: true
    }
  }

]

export default cancerPulmonFormulario