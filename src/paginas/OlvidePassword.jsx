import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Alerta from "../components/Alerta"
import backgroundImage from '../assets/IMG-1.png'
import getAuthToken from "../utils/AuthToken"
import { Spinner } from "flowbite-react";



const OlvidePassword = () => {

  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})
  const [botonCargando, setBotonCargando] = useState(false)


  const handleSubmit = async e => {
    e.preventDefault();
    setBotonCargando(true)

    if (email === '') {
      setAlerta({
        msg: 'Ingresa un correo válido',
        error: true
      })
      setBotonCargando(false)
      return
    }

    try {
      const tokenAPI = await getAuthToken(); // Obtén el token usando la función

      const configWithTokenAPI = {
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenAPI
        }
      };

      const { data, status } = await axios.post(`https://apiusers.guiaysalud.com/api/users/forgot-password/`, { email }, configWithTokenAPI)

      if(status === 200){
        setAlerta({
          msg: `Revisa tu correo ${email} para continuar.`,
          error: false
        })
        setBotonCargando(false)
        return
      }

      setAlerta({
        msg: data.msg,
        error: false
      })

      setBotonCargando(false)

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
          <h2 className="text-4xl font-poppins font-semibold text-white mb-6 text-center animate-pulse">Olvide mi contraseña</h2>
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="input-field relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white placeholder-gray-200 transition duration-200"
              />
              <i className="fas fa-envelope absolute right-3 top-3 text-white"></i>
            </div>
            {msg && <Alerta alerta={alerta} />}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300 transition duration-300 transform">
             {botonCargando ? <Spinner color="purple" aria-label="Default status example" /> : <>Recuperar Contraseña <i className="fas fa-arrow-right ml-2"></i></>}
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

export default OlvidePassword
