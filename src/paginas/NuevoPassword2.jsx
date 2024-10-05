import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { clienteAxios } from "../config/clienteAxios"
import Alerta from "../components/Alerta"
import backgroundImage from '../assets/IMG-1.png'


const NuevoPassword = () => {
  const [tokenValido, setTokenValido] = useState(false)
  const [alerta, setAlerta] = useState({})
  const [password, setPassword] = useState('')
  const [passwordModificado, setPasswordModificado] = useState(false)
  const params = useParams()
  const { token } = params


  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios.get(`/usuarios/olvide-password/${token}`)
        setTokenValido(true)

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }

    comprobarToken()
  }, [])


  const handleSubmit = async e => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: 'El password debe tener mínimo 6 caracteres.',
        error: true
      })
      return
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password/${token}`, { password })
      setPasswordModificado(true)

      setAlerta({
        msg: data.msg,
        error: false
      })

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Ingresa tu nueva <span className="text-slate-700">Contraseña</span></h1>

      {tokenValido && (


        <form className="my-10 bg-white shadow rounded-lg py-10 px-10" onSubmit={handleSubmit}>

          {msg && <Alerta alerta={alerta} />}
          {!passwordModificado && (
            <>
              <div className="my-5">
                <label htmlFor="password" className="uppercase text-gray-700 block text-xl font-bold">Contraseña</label>
                <input className="w-full mt-3 p-3 border rounded-xl bg-gray-50" type="password" id="password" placeholder="Ingresa tu contraseña"

                  value={password}
                  onChange={e => setPassword(e.target.value)}

                />
              </div>

              <input type="submit" value="Actualizar Contraseña" className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors mb-5" />
            </>
          )}

          {passwordModificado && (
            <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="/login">
              <span className="font-bold">Iniciar Sesión</span>
            </Link>
          )}
        </form>
      )}

      {!tokenValido && (
        <div className="my-10 bg-white shadow rounded-lg py-10 px-10">
          <Alerta alerta={alerta} />
        </div>
      )}


    </>
  )
}

export default NuevoPassword