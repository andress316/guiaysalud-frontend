import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect } from "react"

const RutaPublica = () => {
    const { auth, cargando, darkTheme, setDarkTheme } = useAuth();

    





    if (cargando) return (
        <>
            <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="p-4 bg-gradient-to-tr animate-spin from-yellow-500 to-blue-500 via-purple-500 rounded-full">
                    <div className="bg-white rounded-full dark:bg-slate-800">
                        <div className="w-28 h-28 rounded-full"></div>
                    </div>
                </div>
            </div>
            <h1 className="font-poppins font-medium text-slate-500 dark:text-white absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 animate-pulse">Cargando</h1>
        </>
    )


    return (
        <>
            {!auth.id ?
                <>
                    <Header />
                    <main className="container-fluid mx-auto md:justify-center">
                        <div>
                            <Outlet />
                        </div>
                    </main>
                    <Footer />
                </> :
                <Navigate to="/app" />}
        </>
    )
}

export default RutaPublica
