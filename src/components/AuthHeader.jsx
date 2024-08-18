import { useEffect, useState } from "react";
import logo from "../assets/guia-y-salud-logo-01.png";
import logoBlanco from "../assets/guiaysalud-logo-blanco.png"
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AuthHeader = () => {
  const { darkTheme, setDarkTheme, auth, setAuth } = useAuth()
  const [hamburgerMenu, sethamburgerMenu] = useState(false)

  const handleCerrarSesion = e => {
    e.preventDefault();
    setAuth({});
    localStorage.removeItem('tokenUser');
    navigate('/');
  };

  const handleHamburgerMenu = () => {
    sethamburgerMenu(!hamburgerMenu)
  };

  const handleDarkTheme = () => {
    setDarkTheme(!darkTheme)

  }

  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('theme', true);
      document.querySelector('html').classList.add('dark')
    }
    else {
      localStorage.setItem('theme', false);
      document.querySelector('html').classList.remove('dark')
    }
  }, [darkTheme])

  return (
    <>
      <nav className="z-20 bg-white dark:bg-slate-800 fixed md:static w-full md-w-auto boder-b md:border-none shadow-lg md_shadow-none dark:boder-none">
        <div className="p-6 container mx-auto">
          <div className="flex items-center justify-between">

            {/* <!--  logo --> */}
            <div className="z-20">
              <Link to="/" className="flex items-center">
                <img src={!darkTheme ? logo : logoBlanco} alt="" className="h-14" />
              </Link>
            </div>


            {/* <!--  cuerpo de menú --> */}
            <div>
              {/* <!--  Botón responsive --> */}
              <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden onChange={handleHamburgerMenu} />
              <label htmlFor="hamburger" className="peer-checked:hambuger peer-checked:bg-gray-200 peer-checked:dark:bg-slate-600 block z-20 cursor-pointer md:hidden transition p-5 dark:hover:bg-slate-800 rounded-lg">
                <div className={hamburgerMenu ? "rotate-45 translate-y-1.5 h-0.5 w-6 bg-black dark:bg-white transition" : "h-0.5 w-6 bg-black dark:bg-white transition"}></div>
                <div className={hamburgerMenu ? "-rotate-45 -translate-y-1 mt-2 h-0.5 w-6 bg-black dark:bg-white transition" : "mt-2 h-0.5 w-6 bg-black dark:bg-white transition"}></div>
              </label>


              {/* <!--  Cuerpo de los enlaces --> */}
              <div className="bg-white dark:bg-slate-900 dark:md:bg-slate-800 w-3/5 shadow-lg  flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row transition">

                <div className="px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0 ">
                  <Link to="/" className="tracking-wide cursor-pointer px-3 py-2 rounded hover:text-white font-semibold text-lg transition hover:bg-pink-500 ">Inicio</Link>
                  <Link to="/app/perfil" className="tracking-wide cursor-pointer px-3 py-2 rounded hover:text-white font-semibold text-lg transition hover:bg-yellow-500 ">Mi perfil</Link>
                  <Link to="/app/blog" className="tracking-wide cursor-pointer px-3 py-2 rounded hover:text-white font-semibold text-lg transition hover:bg-indigo-500 ">Blog</Link>

                  {/* Cambio de color del tema */}
                  <input type="checkbox" name="theme" id="theme" className="peer" hidden onChange={handleDarkTheme} />
                  <label htmlFor="theme" className="flex flex-row gap-2 justify-left items-center relative cursor-pointer p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-600 dark:hover:bg-slate-700">
                    <svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                      <path className="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                    </svg>
                    <svg className="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-slate-500" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                      <path className="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                    </svg>
                    <p className="font-poppins font-medium md:hidden">Modo oscuro</p>
                  </label>
                </div>







                {/* Botones */}
                <div className="border-t py-8 px-6 md:border-t-0 dark:border-slate-700 md:py-0 md:pr-0 md:pl-6 flex flex-col md:flex-row">
                  <button to="/registrar" className="block mt-2  px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleCerrarSesion}>Cerrar Sesión</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
};

export default AuthHeader;