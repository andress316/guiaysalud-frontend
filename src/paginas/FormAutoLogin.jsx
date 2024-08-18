import { useState, useEffect } from "react"
import { useParams } from "react-router"
import {clienteAxios} from "../config/clienteAxios"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"

const FormAutoLogin = () => {
    const params = useParams();
    const { email, password } = params
    const { setAuth } = useAuth();
    const [alerta, setAlerta] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        const redirect = async () => {
            try {
                //Petición para iniciar sesión
                const { data } = await clienteAxios.post('/usuarios/login', { email, password })
                localStorage.setItem('token', data.token)
                setAuth(data)
                navigate('/app') // Sección privada
            } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                  })
            }
        }
        redirect()
    }, [])

    const { msg } = alerta

    return (
        <>
            <div>
            {msg && <Alerta alerta={alerta} />}
            </div>
        </>
    )
}
export default FormAutoLogin