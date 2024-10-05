import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import getAuthToken from "../utils/AuthToken";
import CardGuia from "../components/CardGuia";
import Footer from "../components/Footer";
import avatarGuiaYSalud from "../assets/avatar-guia-y-salud.png"
import avatarUsuarioMasculino from "../assets/avatarUsuarioMasculino.png"
import iconoBusquedaTratamiento from "../assets/ICONO-TRATAMIENTOS.png"
import iconoGrupos from "../assets/ICONO-GRUPOS.png"
import guiasDeUsuario from "../utils/GuiasBd.js";


import { Carousel } from "flowbite-react";


const AppInicio = () => {
  const { auth, cargando } = useAuth();
  const [guias, setGuias] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [conversacion, setConversacion] = useState([]);
  const mensajesEndRef = useRef(null);

  useEffect(() => {
    const consultarGuias = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };

      try {
        //Consultamos las guías del usuario
        const tokenAPI = await getAuthToken();
        const configWithTokenAPI = {
          headers: {
            "Content-Type": "application/json",
            Authorization: tokenAPI
          }
        };

        const {data} = await axios.get(`https://apiusers.guiaysalud.com/api/users/${auth.id}/guide`, configWithTokenAPI);





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

        const { data } = await axios.get(`https://apiusers.guiaysalud.com/api/users/${auth.id}/conversaciones`, configWithTokenAPI);


        const formattedData = data.map(msg => [
          { sender: 'me', text: msg.mensajeUsuario.split(/Thu|Sun|Mon|Tue|Wed|Fri|Sat/)[0], createdAt: msg.fecha },
          { sender: 'bot', text: msg.MensajeRespuestaBot.split(/Thu|Sun|Mon|Tue|Wed|Fri|Sat/)[0], createdAt: msg.fecha }
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


      const {data} = await axios.post(`https://apibot.guiaysalud.com/api/v1/bot/conversaciones`,
        { mensaje, id: auth.id },
        configWithTokenBot
      );


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

    <>
      <div className='flex px-5 pt-36 md:py-10 flex-col items-center relative'>
        <h1 className="text-center lg:text-5xl xl:text-6xl text-4xl mb-4 font-black text-indigo-900 dark:text-white lg:pr-5 font-poppins">Bienvenido <span className="text-pink-500 dark:text-pink-500">{auth.nombre}</span></h1>
        <p className="font-poppins text-indigo-900 dark:text-white dark:text-gray100 md:text-2xl text-xl text-center">Panel de guía y apoyo para <span className="font-extrabold">Cáncer gástrico</span></p>
        <Link className="font-poppins font-medium text-md mt-2 text-gray-400 hover:text-pink-500">¿Necesitas cambiar de enfermedad?</Link>


      </div>


      <div className='container mx-auto flex px-5 mt-5 md:mb-3 md:flex-row flex-col items-start relative gap-7'>


        {/* Sección Chat */}
        <div className="w-full md:w-1/2 lg:w-1/3 items-center">
          <div className="flex flex-col h-[80vh] mx-auto overflow-hidden dark:bg-slate-700 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

            {/* Header del chat */}
            <div className="flex items-center p-4 bg-gradient-to-r from-indigo-800 to-indigo-950 py-5 shadow-lg gap-3">
              <img className="w-10 h-10 rounded-full bg-indigo-900" src={avatarGuiaYSalud} alt="Rounded avatar" />
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
                        ? 'bg-violet-700 self-end text-left text-white font-poppins'
                        : 'bg-violet-100 dark:bg-violet-300 dark:text-slate-800 self-start text-left font-poppins'
                        }`}
                    >
                      <p className="text-md mb-2" style={{ fontSize: '14px' }}>{msg.text}</p>
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
                className="font-poppins flex-1 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 mr-2 bg-gray-100 dark:bg-gray-900 dark:text-white text-slate-700 border-none"
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
        <div className="lg:w-2/3 w-full md:w-1/2 mt-5 md:mt-0">
          <div className="flex bg-white dark:bg-slate-700 rounded-xl mb-10 h-44  items-center justify-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <Carousel slideInterval={5000}>
              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>
          </div>




          <div className="bg-white dark:bg-slate-700 rounded-xl mb-10 items-start justify-start transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Mis guías</h1>
            <p className="px-9 font-poppins text-gray-400 animate-pulse">Desliza para ver más ⮕</p>
            <div className="flex overflow-x-scroll scrollbar">
              <div className="flex flex-nowrap p-6">
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




      <div className="container mb-5 mx-auto flex px-5 mt-5 md:mb-10 md:flex-row flex-col items-start relative md:gap-10">

        <div className="flex bg-white dark:bg-slate-700 rounded-xl mb-5 h-44 w-full md:w-1/2 items-center justify-start p-5 gap-3 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <div className="w-1/3">
            <img src={iconoBusquedaTratamiento} alt="" />
          </div>
          <div className="w-2/3">
            <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-lg text-md">Búsqueda de tratamientos modernos</h1>
            <Link role='button' href="" target="_blank" className="block  px-3 py-1  w-full text-center text-sm font-poppins font-medium bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-pink-500 hover:to-purple-700 text-white rounded-full transition mt-2">¡Comenzar!</Link>
          </div>
        </div>

        <div className="flex bg-white dark:bg-slate-700 rounded-xl mb-5 h-44 w-full md:w-1/2 items-center justify-start p-5 gap-3 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <div className="w-1/3">
            <img src={iconoGrupos} alt="" />
          </div>
          <div className="w-2/3">
            <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-lg text-md">Grupos de apoyo para pacientes</h1>
            <Link role='button' href="" target="_blank" className="block  px-3 py-1  w-full text-center text-sm font-poppins font-medium bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-pink-500 hover:to-purple-700 text-white rounded-full transition mt-2">¡Unirme!</Link>
          </div>
        </div>

        <div className="flex bg-white dark:bg-slate-700 rounded-xl mb-5 h-44 w-full md:w-1/2 items-center justify-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">Acá van alianzas</div>
      </div>


      <Footer />
    </>







  );
};

export default AppInicio;
