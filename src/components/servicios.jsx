// import React from 'react';

// const Testimonios = () => {
//   // Array de testimonios con contenido dinámico
//   const testimonios = [
//     {
//       quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
//       nombre: "Nombre 1",
//       tipo: "Paciente de Cáncer Gástrico"
//     },
//     {
//       quote: "Otro testimonio interesante.",
//       nombre: "Nombre 2",
//       tipo: "Otro tipo de paciente"
//     },
//     {
//       quote: "Tercer testimonio inspirador.",
//       nombre: "Nombre 3",
//       tipo: "Paciente de otro tipo de enfermedad"
//     }
//   ];

//   return (
//     <section className="bg-white py-20">
//       <div className="container mx-auto">

//         <div><p className='text-center text-4xl'>¿Eres paciente y no encuentras apoyo? </p>
//         <p className='text-center'>Guías Personalizadas gratis por whatsapp Unidos podemos todo Comenzar Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer </p> 
//         <p className='text-center'>adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
//         </div>
       
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Mapear cada testimonio en un div */}
//           {testimonios.map((testimonio, index) => (
//             <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
//               <p className="italic mb-4">“{testimonio.quote}”</p>
//               <h4 className="text-lg font-bold">{testimonio.nombre}</h4>
//               <p className="text-gray-700">{testimonio.tipo}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonios;
import React from 'react';

const Servicios = () => {
  // Array de datos de las tarjetas
  const cards = [
    {
      title: "Guías Personalizadas gratis por whatsapp",
      icon: "📄", // Aquí puedes reemplazar con un ícono real o usar una imagen
      features: [
        "Guías personalizadas para tu caso.",
        "Información creada con Inteligencia Artificial y avalada por especialistas.",
        "Recibe tus guías por whatsapp",
        "Gratis"
      ],
      buttonText: "Comenzar",
      buttonColor: "bg-purple-900"
    },
    {
      title: "Chat con asistente IA para tu enfermedad",
      icon: "💬", // Aquí puedes reemplazar con un ícono real o usar una imagen
      features: [
        "Consulta dudas sobre tu enfermedad.",
        "Asistente entrenado con inteligencia artificial.",
        "Herramienta desarrollada y avalada por especialistas.",
        "Gratis"
      ],
      buttonText: "Comenzar",
      buttonColor: "bg-yellow-500"
    },
    {
      title: "Grupos de apoyo por whatsapp",
      icon: "❤️", // Aquí puedes reemplazar con un ícono real o usar una imagen
      features: [
        "Guías personalizadas para tu caso.",
        "Información creada con Inteligencia Artificial y avalada por especialistas.",
        "Recibe tus guías por whatsapp",
        "Crea tus guías gratis"
      ],
      buttonText: "Comenzar",
      buttonColor: "bg-pink-500"
    },
    {
      title: "Búsqueda de tratamientos modernos",
      icon: "🩺", // Aquí puedes reemplazar con un ícono real o usar una imagen
      features: [
        "Guías personalizadas para tu caso.",
        "Información creada con Inteligencia Artificial y avalada por especialistas.",
        "Recibe tus guías por whatsapp",
        "Crea tus guías gratis"
      ],
      buttonText: "Comenzar",
      buttonColor: "bg-blue-500"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
      <div className='mb-9'>
        <p className='text-center text-4xl'>¿Eres paciente y no encuentras apoyo? </p>
         <p className='text-center'>Guías Personalizadas gratis por whatsapp Unidos podemos todo Comenzar Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer </p> 
        <p className='text-center'>adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
         </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mapear cada tarjeta en un div */}
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-md text-center">
              <div className="text-6xl mb-4">{card.icon}</div>
              <h4 className="text-lg font-bold mb-4">{card.title}</h4>
              <ul className="text-left mb-4">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 px-10 py-3 ${card.buttonColor} font-bold text-white rounded-custom-xl`}>
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
