import { useEffect, useState} from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import {clienteAxios} from "../config/clienteAxios"
import Alerta from "../components/Alerta"

const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const params = useParams();
  const {id} = params
  
  useEffect(()=>{
    
    const confirmarCuenta = async () => {
      try{

        const {data} = await clienteAxios.get(`/usuarios/confirmar/${id}`)
        
        setAlerta({
          msg: data.msg,
          error: false
        })

        setCuentaConfirmada(true)
      
      }catch(error){
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    };
    confirmarCuenta();
  },[])

  const {msg} = alerta;


  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma <span className="text-slate-700">tu cuenta</span></h1>

      <div>
        {msg && <Alerta alerta={alerta}/>}
        {cuentaConfirmada && (
          <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="/login">
          <span className="font-bold">Iniciar Sesión</span>
        </Link>
        )}
      </div>
    </>
  )
}

export default ConfirmarCuenta
