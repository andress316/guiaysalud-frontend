import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import axios from "axios";
import Alerta from "../components/Alerta"
import getAuthToken from "../utils/AuthToken";

import { Spinner } from "flowbite-react";

import backgroundImage from '../assets/IMG-1.png'

const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const params = useParams();
  const { id } = params

  useEffect(() => {

    const confirmarCuenta = async () => {
      try {


        // Problemas con el TOKEN... Importante arreglar
        const tokenAPI = await getAuthToken();

        const configWithTokenAPI = {
          headers: {
            "Content-Type": "application/json",
            Authorization: tokenAPI
          }
        };

        const { data, status } = await axios.post(`https://apiusers.guiaysalud.com/api/users/activate/${id}`, configWithTokenAPI);
       

        if (data.error === '0405.user' && status === 200) {
          setAlerta({
            msg: 'Usuario NO encontrado',
            error: true
          })
          setCuentaConfirmada(true)
          return
        }


        if (data.error === '0406.user' && status === 200) {
          setAlerta({
            msg: 'El usuario ya está activado',
            error: true
          })
          setCuentaConfirmada(true)
          return
        }

        setCuentaConfirmada(false)

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    };
    confirmarCuenta();

  }, [])


  const { msg } = alerta;


  return (
  
    <>

      <div className=" flex justify-center p-5 md:py-24 md:flex-row flex-col items-center md:items-start relative pt-40 h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md transform transition-all duration-200">
          <h2 className="text-4xl font-poppins font-semibold text-white mb-6 text-center animate-pulse">Activar Cuenta</h2>
          {msg && <Alerta alerta={alerta} />}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300 transition duration-300 transform">
            {cuentaConfirmada ? <><Link to="/login" className=""> Iniciar Sesión <i className="fas fa-arrow-right ml-2"></i></Link></> : <><Link to="/registrar" className=""> Crear Cuenta <i className="fas fa-arrow-right ml-2"></i></Link></>}

          </button>

        </div>
      </div>




    </>
  )
}

export default ConfirmarCuenta
