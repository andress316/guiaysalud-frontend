import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import getAuthToken from "../utils/AuthToken";
import CardGuia from "../components/CardGuia";
import Footer from "../components/Footer";
import avatarGuiaYSalud from "../assets/avatar-guia-y-salud.png"
import avatarUsuarioMasculino from "../assets/avatarUsuarioMasculino.png"
import guiasDeUsuario from "../utils/GuiasBd.js";

const AppInicio = () => {
  const { auth, cargando } = useAuth();
  const [guias, setGuias] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [conversacion, setConversacion] = useState([]);
  const mensajesEndRef = useRef(null);

  useEffect(() => {
    console.log(guiasDeUsuario)
    const consultarGuias = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };

      try {
        //const { data } = await clienteAxios.get(`/pdf-guide/${auth._id}`, config);
        //setGuias(data);
      } catch (error) {
        console.error('Error al consultar las guías:', error);
      }
    };

    const consultarConversacion = async () => {
      try {
        const token = await getAuthToken();
        const configWithTokenAPI = {
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        };

        const { data } = await axios.get(`http://172.206.55.212:4002/api/bot/conversaciones/${auth.id}`, configWithTokenAPI);
        const formattedData = data.map(msg => [
          { sender: 'me', text: msg.mensajeUsuario.split(/Thu|Sun|Mon|Tue|Wed|Fri|Sat/)[0], createdAt: msg.createdAt },
          { sender: 'bot', text: msg.MensajeRespuestaBot.split(/Thu|Sun|Mon|Tue|Wed|Fri|Sat/)[0], createdAt: msg.createdAt }
        ]).flat();

        if (formattedData.length === 0) {
          const welcomeMessage = { sender: 'bot', text: `Hola ${auth.user.nombre}, ¿En qué puedo ayudarte hoy?`, createdAt: new Date() };
          formattedData.push(welcomeMessage);
        }

        setConversacion(formattedData);
      } catch (error) {
        console.error('Error al consultar la conversación en el chat:', error);
      }
    };

    consultarGuias();
    consultarConversacion();
    window.scrollTo(0, 0);
  }, [auth.id, auth.nombre]);

  useEffect(() => {
    if (mensajesEndRef.current) {
      mensajesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversacion]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getAuthToken();
      const configWithTokenBot = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      };

      // Verifica los datos que estás enviando
      console.log("Enviando mensaje:", { mensaje, id: auth.id });

      const { data } = await axios.post(`http://172.206.55.212:4002/api/bot/conversaciones`,
        { mensaje, id: auth.id },
        configWithTokenBot
      );

      // Maneja la respuesta de la API
      console.log("Respuesta del servidor:", data);

      setConversacion([
        ...conversacion,
        { sender: 'me', text: mensaje, createdAt: new Date() },
        { sender: 'bot', text: data.msg.split(/Thu|Sun|Mon|Tue|Wed|Fri|Sat/)[0], createdAt: new Date() }
      ]);
      setMensaje('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  if (cargando) return 'Cargando...';

  return (
    // <>
    //   <div className='container mx-auto flex px-5 md:py-5 md:flex-row flex-col items-center relative pt-40'>
    //     <h1 className="text-sky-600 font-black text-3xl capitalize mt-10 text-center">
    //       Bienvenido <span className="text-slate-700">{auth.nombre}</span>
    //     </h1>
    //   </div>
    //   <div className="mt-10 mb-20 flex flex-col h-[40vh] max-w-lg mx-auto border rounded-lg overflow-hidden bg-gray-800">
    //     <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-2">
    //       {conversacion.length > 0 ? (
    //         conversacion.map((msg, index) => (
    //           <div
    //             key={index}
    //             className={`p-3 rounded-lg max-w-xs ${msg.sender === 'me'
    //               ? 'bg-blue-200 self-end text-right'
    //               : 'bg-white self-start text-left'
    //               }`}
    //           >
    //             <p className="text-xs" style={{ fontSize: '12px' }}>{msg.text}</p>
    //             <small className="text-xs text-gray-500" style={{ fontSize: '12px' }}>{new Date(msg.createdAt).toLocaleString()}</small>
    //           </div>
    //         ))
    //       ) : (
    //         <div className="text-gray-400 text-center">No hay conversaciones previas.</div>
    //       )}
    //       <div ref={mensajesEndRef} />
    //     </div>
    //     <form className="flex p-4 bg-gray-700 border-t border-gray-600" onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         placeholder="Escribe tu mensaje..."
    //         className="flex-1 p-2 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 bg-gray-600 text-white"
    //         value={mensaje}
    //         onChange={e => setMensaje(e.target.value)}
    //       />
    //       <button
    //         type="submit"
    //         className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
    //       >
    //         Enviar
    //       </button>
    //     </form>
    //   </div>
    //   <h2 className="text-sky-600 font-black text-3xl capitalize">Acá va un chat</h2>
    //   <div className="bg-gray-100 w-full gap-4 flex-wrap flex justify-center items-center mt-20">
    //     {guias.length ? (
    //       guias.map((guia) => (
    //         <CardGuia
    //           key={guia._id}
    //           nombre={guia.nombre}
    //           guia_nombre_display={guia.guia_nombre_display}
    //           fecha={guia.fecha}
    //           url={guia.url}
    //           url_preview_img={guia.url_preview_img}
    //         />
    //       ))
    //     ) : (
    //       'No has creado ninguna guía aún...'
    //     )}
    //   </div>
    //   <div className="flex gap-4 mt-10">
    //     <Link to="/guias/cancer" className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold">
    //       Crear nuevas guías
    //     </Link>
    //   </div>
    // </>



    <>
      <div className='flex px-5 pt-36 md:py-10 flex-col items-center relative'>
        <h1 className="text-center lg:text-5xl xl:text-6xl text-4xl mb-4 font-black text-indigo-900 dark:text-white lg:pr-5 font-poppins">Bienvenido <span className="text-pink-500 dark:text-pink-500">{auth.nombre}</span></h1>
        <p className="font-poppins text-indigo-900 dark:text-white dark:text-gray100 md:text-2xl text-xl">Panel de guía y apoyo para <span className="font-extrabold">Cáncer gástrico</span></p>
        <Link className="font-poppins font-medium text-md mt-2 text-gray-400 hover:text-pink-500">¿Necesitas cambiar de enfermedad?</Link>


      </div>


      <div className='container mx-auto flex px-5 mt-5 md:mb-3 md:flex-row flex-col items-start relative gap-10'>


        {/* Sección Chat */}
        <div className="md:w-1/3">
          <div className="flex flex-col h-[80vh] mx-auto overflow-hidden dark:bg-slate-700 bg-white rounded-xl shadow-2xl">

            {/* Header del chat */}
            <div className="flex items-center p-4 bg-gradient-to-r from-indigo-800 to-indigo-950 py-5 shadow-lg gap-3">
              <img class="w-10 h-10 rounded-full bg-indigo-900" src={avatarGuiaYSalud} alt="Rounded avatar" />
              <h1 className="font-poppins font-bold text-white">Asistente Guía y Salud</h1>
            </div>


            <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-2">
              {conversacion.length > 0 ? (
                conversacion.map((msg, index) => (
                  <div className={`flex gap-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <img class="w-10 h-10 rounded-full bg-indigo-900" src={msg.sender === 'me' ? avatarUsuarioMasculino : avatarGuiaYSalud} alt="Rounded avatar" />
                    <div
                      key={index}
                      className={`p-3 rounded-lg max-w-xs ${msg.sender === 'me'
                        ? 'bg-violet-700 self-end text-right text-white font-poppins'
                        : 'bg-violet-100 dark:bg-violet-300 dark:text-slate-800 self-start text-left font-poppins'
                        }`}
                    >
                      <p className="text-xs mb-2" style={{ fontSize: '12px' }}>{msg.text}</p>
                      <small className={`${msg.sender === 'me'
                        ? 'text-violet-300 font-poppins'
                        : 'text-gray-400 dark:text-slate-600 font-poppins'
                        }`} style={{ fontSize: '12px' }}>{new Date(msg.createdAt).toLocaleString()}</small>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-center">No hay conversaciones previas.</div>
              )}
              <div ref={mensajesEndRef} />
            </div>

            <form className="flex p-4 py-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="font-poppins flex-1 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 mr-2 bg-gray-100 dark:bg-gray-900 dark:text-white text-slate-700"
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
              />
              <button
                type="submit"
                className="px-7 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>




        {/* Sección Otras herramientas */}
        <div className="md:w-2/3 w-full">
          <div className="flex bg-white rounded-xl mb-10 h-44 shadow-2xl items-center justify-center">Banner de anuncios</div>

          <div className="bg-white rounded-xl mb-10 shadow-2xl items-start justify-start">
            <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Mis guías</h1>
            <div className="flex overflow-x-scroll">
              <div className="flex flex-nowrap p-11">
                {guiasDeUsuario.length ? (guiasDeUsuario.map((guia) => (
                  <CardGuia
                    key={guia._id}
                    nombre={guia.nombre}
                    guia_nombre_display={guia.guia_nombre_display}
                    fecha={guia.fecha}
                    url={guia.url}
                    url_preview_img={guia.url_preview_img}
                    created={guia.created}
                    descripcion={guia.descripcion}
                  />
                ))) : 'No has creado ninguna guía aún...'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex px-5 mt-5 md:mb-3 md:flex-row flex-col items-start relative gap-10">
        <div className="flex bg-white rounded-xl mb-10 h-44 w-1/2 shadow-2xl items-center justify-center">Acá van los tratamientos</div>
        <div className="flex bg-white rounded-xl mb-10 h-44 w-1/2 shadow-2xl items-center justify-center">Acá van grupos de apoyos</div>
        <div className="flex bg-white rounded-xl mb-10 h-44 w-1/2 shadow-2xl items-center justify-center">Acá van alianzas</div>
      </div>
      <Footer />
    </>







  );
};

export default AppInicio;
