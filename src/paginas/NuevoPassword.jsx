import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Alerta from "../components/Alerta"
import backgroundImage from '../assets/IMG-1.png'
import getAuthToken from "../utils/AuthToken"
import { Spinner } from "flowbite-react";



const NuevoPassword = () => {

  const [newPassword, setNewPassword] = useState('')
  const [validarPassword, setValidarPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  const [botonCargando, setBotonCargando] = useState(false)

  const params = useParams()
  const token = params


  const handleSubmit = async e => {
    e.preventDefault();
    setBotonCargando(true)

    if (newPassword === '' || validarPassword === '') {
      setAlerta({
        msg: 'Campos obligatorios',
        error: true
      })
      setBotonCargando(false)
      return
    }

    if (newPassword !== validarPassword) {
      setAlerta({
        msg: 'Las contraseñas deben ser iguales',
        error: true
      })
      setBotonCargando(false)
      return
    }

    try {
      const tokenAPI = await getAuthToken(); // Obtén el token usando la función

      const userNewPassword = {
        token: token.token,
        newPassword: newPassword
      }

      const configWithTokenAPI = {
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenAPI
        }
      };

      const { data, status } = await axios.post(`https://apiusers.guiaysalud.com/api/users/reset-password/`, userNewPassword , configWithTokenAPI)
      console.log(status)

      if (status === 200) {
        setAlerta({
          msg: `Contraseña actualizada, inicia sesión.`,
          error: false
        })
        setBotonCargando(false)
        return
      }


    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
      setBotonCargando(false)
      return
    }
  }

  const { msg } = alerta;

  return (

    <>

      <div className=" flex justify-center p-5 md:py-24 md:flex-row flex-col items-center md:items-start relative pt-40 h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-md transform transition-all duration-200">
          <h2 className="text-4xl font-poppins font-semibold text-white mb-6 text-center animate-pulse">Ingresa tu nueva contraseña</h2>
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="input-field relative">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="newPassword"
                required
                placeholder="Nueva contraseña"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white placeholder-gray-200 transition duration-200"
              />
              <i className="fas fa-envelope absolute right-3 top-3 text-white"></i>
            </div>

            <div className="input-field relative">
              <input
                id="validarPassword"
                name="validarPassword"
                type="password"
                autoComplete="validarPassword"
                required
                placeholder="Confirmar contraseña"
                value={validarPassword}
                onChange={e => setValidarPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white placeholder-gray-200 transition duration-200"
              />
              <i className="fas fa-envelope absolute right-3 top-3 text-white"></i>
            </div>
            {msg && <Alerta alerta={alerta} />}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300 transition duration-300 transform">
              {botonCargando ? <Spinner color="purple" aria-label="Default status example" /> : <>Cambiar Contraseña <i className="fas fa-arrow-right ml-2"></i></>}
            </button>
          </form>


          <p className="text-white text-center mt-6">
            ¿No tienes una cuenta?
            <Link to="/registrar" className="font-bold hover:underline"> Crear Cuenta</Link>
          </p>
        </div>
      </div>




    </>
  )
}

export default NuevoPassword
