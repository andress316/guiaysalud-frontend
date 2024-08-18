import { useState } from "react"
import { Link } from "react-router-dom"
import { clienteAxios } from "../config/clienteAxios"
import Alerta from "../components/Alerta"
import backgroundImage from '../assets/IMG-1.png'



const OlvidePassword = () => {

  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})


  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '') {
      setAlerta({
        msg: 'Ingresa un correo válido',
        error: true
      })
      return
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password/`, { email })

      setAlerta({
        msg: data.msg,
        error: false
      })

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
      return
    }
  }

  const { msg } = alerta;

  return (
    // <>
    //   <h1 className="text-sky-600 font-black text-6xl capitalize">Recuperar <span className="text-slate-700">Contraseña</span></h1>

    //   <form className="my-10 bg-white shadow rounded-lg py-10 px-10" onSubmit={handleSubmit}>

    //     {msg && <Alerta alerta={alerta} />}

    //     <div className="my-5">
    //       <label htmlFor="email" className="uppercase text-gray-700 block text-xl font-bold">Email</label>
    //       <input className="w-full mt-3 p-3 border rounded-xl bg-gray-50" type="email" id="email" placeholder="Email de usuario"

    //       onChange={e => setEmail(e.target.value)}

    //       />
    //     </div>

    //     <input type="submit" value="Recuperar Contraseña" className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5"/>

    //   </form>

    //   <nav className="lg:flex lg:justify-between">
    //     <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="/login">
    //       ¿Ya tienes una cuenta? <span className="font-bold">Iniciar Sesión</span>
    //     </Link>
    //   </nav>
    // </>

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
              Recuperar contraseña
              <i className="fas fa-arrow-right ml-2"></i>
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
