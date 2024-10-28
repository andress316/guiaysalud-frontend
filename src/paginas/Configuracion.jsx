import { Outlet, Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import { Tabs } from "flowbite-react";
import { HiUserCircle, HiKey, HiShieldCheck } from "react-icons/hi";
import ConfiguracionPerfil from "../components/ConfiguracionPerfil";
import ConfiguracionNotificaciones from "../components/ConfiguracionNotificaciones";
import ConfiguracionTerminos from "../components/ConfiguracionTerminos";
import ConfiguracionLogin from "../components/ConfiguracionLogin";
import ConfiguracionPrivacidad from "../components/ConfiguracionPrivacidad";
import Footer from "../components/Footer";


const Configuracion = () => {
    const { auth, cargando } = useAuth();
    


    return (
        <>
            <div className="md:h-screen">
                <div className='flex px-5 pt-36 md:py-10 flex-col items-center relative'>
                    <h1 className="text-center lg:text-5xl xl:text-6xl text-4xl mb-4 font-black text-indigo-900 dark:text-white lg:pr-5 font-poppins">Configuración de <span className="text-pink-500 dark:text-pink-500">Sistema</span></h1>
                </div>


                <div className='flex flex-col md:flex-row justify-center'>
                    <Tabs className="flex justify-center" aria-label="Tabs with icons" variant="underline">
                        <Tabs.Item active title="Perfil" icon={HiUserCircle}>
                            <ConfiguracionPerfil />
                        </Tabs.Item>

                        {/* <Tabs.Item title="Notificaciones" icon={HiBell}>
                            <ConfiguracionNotificaciones />
                        </Tabs.Item> */}

                        <Tabs.Item title="Inicio de Sesión" icon={HiKey}>
                            <ConfiguracionLogin />
                        </Tabs.Item>

                        <Tabs.Item title="Privacidad" icon={HiShieldCheck}>
                            <ConfiguracionPrivacidad />
                        </Tabs.Item>
                    </Tabs>
                </div>

            </div>
            <Footer />
        </>

    )
}

export default Configuracion
