import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import AuthHeader from "../components/AuthHeader";
import Footer from "../components/Footer";

const RutaProtegida = () => {

  const { auth, cargando } = useAuth();
  if (cargando) return (
    <>
      <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
        <div className="p-4 bg-gradient-to-tr animate-spin from-yellow-500 to-blue-500 via-purple-500 rounded-full">
          <div className="bg-white rounded-full dark:bg-slate-800">
            <div className="w-28 h-28 rounded-full"></div>
          </div>
        </div>
      </div>
      <h1 className="font-poppins font-medium text-slate-600 dark:text-slate-300 absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 animate-pulse">Cargando</h1>
    </>
  )

  return (
    <>
      {auth.id ?
        <>
          <AuthHeader />
          <main className="container-fluid mx-auto md:justify-center">
            <div>
              <Outlet />
            </div>
          </main>
        </> :
        <Navigate to="/login" />}
    </>
  )
}

export default RutaProtegida
