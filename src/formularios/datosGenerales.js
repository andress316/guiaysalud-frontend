const datosGeneralesFormulario = {
        id: "datos-generales",
        name: "group",
        attributes: {
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
            name: "dropdown",
            id: "sexoDelPaciente",
            attributes: {
              choices: [
                {
                  label: "Masculino",
                  value: "masculino"
                },
                {
                  label: "Femenino",
                  value: "femenino"
                },
              ],
              label: "¿Cuál es el sexo del paciente?",
              description: "Selecciona el género biológico del paciente.",
              required: true,
            }
          },
          {
            name: "dropdown",
            id: "regionDelPaciente",
            attributes: {
              choices: [
                {
                  label: "I. Tarapacá",
                  value: "tarapaca"
                },
                {
                  label: "II. Antofagasta",
                  value: "antofagasta"
                },
                {
                  label: "III. Atacama",
                  value: "atacama"
                },
                {
                  label: "IV. Coquimbo",
                  value: "coquimbo"
                },
                {
                  label: "V. Valparaíso",
                  value: "valparaiso"
                },
                {
                  label: "VI. O'Higgins",
                  value: "ohiggins"
                },
                {
                  label: "VII. Maule",
                  value: "maule"
                },
                {
                  label: "VIII. Bio Bio",
                  value: "biobio"
                },
                {
                  label: "IX. La Araucanía",
                  value: "araucania"
                },
                {
                  label: "X. Los Lagos",
                  value: "loslagos"
                },
                {
                  label: "XI. Aysén",
                  value: "aysen"
                },
                {
                  label: "XII. Magallanes",
                  value: "magallanes"
                },
                {
                  label: "XIII. Región Metropolitana",
                  value: "metropolitana"
                },
                {
                  label: "XIV. Los Ríos",
                  value: "losrios"
                },
                {
                  label: "XV. Arica",
                  value: "arica"
                },
                {
                  label: "XVI. Ñuble",
                  value: "nuble"
                }
              ],
              label: "¿En qué región vive el paciente?",
              description: "Selecciona la región donde recide el paciente.",
              required: true
            }
          },
          {
            id: "ciudadDelPaciente",
            name: "short-text",
            attributes: {
              label: "¿En qué ciudad vive el paciente?",
              required: true,
              placeholder: "Escribe acá..."
            }
          },
        ]
      }

export default datosGeneralesFormulario