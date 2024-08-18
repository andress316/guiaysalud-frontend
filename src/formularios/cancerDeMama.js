const cancerMamaFormulario = [
    {
      name: "dropdown",
      id: "tipoDeCancerMama",
      attributes: {
        attachment: {
          type: "image",
          url:
            "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
        },
        choices: [
          {
            label: "Her2 +",
            value: "her2+"
          },
          {
            label: "Her2 -",
            value: "her2-"
          },
          {
            label: "Mama triple -",
            value: "triplenegativo"
          },
        ],
        label: "¿Selecciona tu tipo de cáncer de mama?",
        nextBtnLabel: "Siguiente",
        layout: "split-right",
        required: true
      }
    }
  
  ]
  
  export default cancerMamaFormulario