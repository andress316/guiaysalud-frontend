import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import NuevoPassword from "./paginas/NuevoPassword"
import OlvidePassword from "./paginas/OlvidePassword"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import Inicio from "./paginas/Inicio"
import { AuthProvider } from "../context/AuthProvider"
import RutaProtegida from "./layouts/RutaProtegida"
import AppInicio from "./paginas/AppInicio"
import Perfil from "./paginas/Perfil"
import Blog from "./paginas/Blog"
import FormEnfermedad from "./paginas/FormEnfermedad"
import Formulario from "./paginas/Formulario"
import FormAutoLogin from "./paginas/FormAutoLogin"
import RutaPublica from "./layouts/RutaPublica"
import TerminosYcondiciones from "./paginas/TerminosYcondiciones"




function App() {

  return (
    <>
    
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path="/form" element={<Formulario />} />
        <Route path="/guias/:enfermedad" element={<FormEnfermedad />} />
        <Route path="/terminosycondiciones" element={<TerminosYcondiciones />}/>
          <Route path="/" element={<RutaPublica />}>
            
            <Route index element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/olvide-password" element={<OlvidePassword />} />
            <Route path="/olvide-password/:token" element={<NuevoPassword />} />
            <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/form-auto-login/:email/:password" element={<FormAutoLogin />} />
          </Route>
            

            <Route path="/app" element={<RutaProtegida />}>
              <Route index element={<AppInicio />} />
              <Route path="/app/perfil" element={<Perfil />} />
              <Route path="/app/blog" element={<Blog />} />
            </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    
    </>
  )
}

export default App
