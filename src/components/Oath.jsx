import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
import { app } from "../firebase"
import { useNavigate } from "react-router-dom"
import {clienteAxios} from "../config/clienteAxios"
import useAuth from "../../hooks/useAuth"
import generarID from "../../helpers/GenerarIds"

const Oath = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();


    const handleGoogleClick = async (req, res) => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth, provider)

            // Extraemos la información del req
            const { displayName, email, photoURL } = result.user

            const userInfo = {
                nombre: displayName,
                email,
                password: generarID(),
                token: "",
                confirmado: true,
                active: true,
                photoUrl: photoURL
            }

            try {
                const { data } = await clienteAxios.post('/usuarios/google-auth', userInfo)
                localStorage.setItem('token', data.token)
                setAuth(data)
                navigate('/app')
            } catch (error) {
                console.log(error)
            }

        } catch (error) {
            console.log(error)
        }
    }




    return (
        <button type="button" className="bg-red-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-red-800 transition-colors mb-5" onClick={handleGoogleClick}>Continuar con Google</button>
    )
}

export default Oath
