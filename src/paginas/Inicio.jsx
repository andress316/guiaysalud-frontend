import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import useAuth from '../../hooks/useAuth';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import heroBackground from '../assets/heroBackground.png'
import icono1 from '../assets/iconos-01.png'
import icono2 from '../assets/iconos-02.png'
import icono3 from '../assets/iconos-03.png'
import icono4 from '../assets/iconos-04.png'
import iconoBlanco1 from '../assets/iconos-blanco-01.png'
import iconoBlanco2 from '../assets/iconos-blanco-02.png'
import iconoBlanco3 from '../assets/iconos-blanco-03.png'
import iconoBlanco4 from '../assets/iconos-blanco-04.png'
import imgPaciente from '../assets/paciente.png'
import homeImage from '../assets/IMG-1.png'
import logoBlanco from '../assets/guiaysalud-logo-blanco.png'
import logoBiocenter from '../assets/logo-biocenter-blanco.png'
import logoCop from '../assets/logo-cop-blanco.png'
import logoGenoma from '../assets/logo-genoma-blanco.png'
import logoJamesLynd from '../assets/logo-james-Lynd-blanco.png'
import logoSanofi from '../assets/logo-sanofi-blanco.png'
import logoCorfo from '../assets/logo-CORFO-blanco.png'
import logoIncubaUc from '../assets/logo-incubaUC-blanco.png'
import logoSaga from '../assets/logo-saga-blanco.png'



const Inicio = () => {
  const { darkTheme } = useAuth()
  const [open, setOpen] = React.useState(1);
  const [counterOn, setCounterOn] = useState(false)


  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const theme = {
    accordion: {
      defaultProps: {
        icon: undefined,
        className: "",
        animate: {
          unmount: {},
          mount: {},
        },
        disabled: false,
      },
      styles: {
        base: {
          container: {
            display: "block",
            position: "relative",
            width: "w-full",
          },
          header: {
            initial: {
              display: "flex",
              justifyContent: "justify-between",
              alignItems: "items-center",
              width: "w-full",
              py: "py-4",
              borderWidth: "border-b border-b-blue-gray-100",
              color: "text-blue-gray-700",
              fontSmoothing: "antialiased",
              fontFamily: "font-sans",
              fontSize: "text-xl",
              textAlign: "text-left",
              fontWeight: "font-semibold",
              lineHeight: "leading-snug",
              userSelect: "select-none",
              hover: "hover:text-blue-gray-900",
              transition: "transition-colors",
            },
            active: { color: "text-blue-gray-900" },
            icon: {
              ml: "ml-4",
            },
          },
          body: {
            display: "block",
            width: "w-full",
            py: "py-4",
            color: "text-gray-700",
            fontSmoothing: "antialiased",
            fontFamily: "font-sans",
            fontSize: "text-sm",
            fontWeight: "font-light",
            lineHeight: "leading-normal",
          },
          disabled: {
            pointerEvents: "pointer-events-none",
            opacity: "opacity-50",
          },
        },
      },
    },
  };


  return (
    <>
      {/* HERO SECTION */}
      <div className='container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center relative pt-40'>

        {/* Cierpo del Hero */}
        <div className='lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 md:pb-0 flex-col md:items-start md:text-left items-center text-center pb-5'>

          {/* texto */}
          <h1 className='lg:text-5xl xl:text-6xl text-4xl mb-4 font-black text-slate-800 dark:text-white lg:pr-5 font-poppins'>Apoyo y acompañamiento de pacientes</h1>
          <p className='mb-8 leading-relaxed text-lg font-poppins dark:text-gray-400'>Nada es imposible si recorremos el camino juntos</p>

          {/* botones */}
          <div className='flex md:flex-row flex-col flex-wrap w-full justify-center md:justify-start gap-10 md:gap-0'>
            <Link to="/registrar" className='bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition'>
              Comenzar ahora
            </Link>
          </div>
        </div>

        {/* imagen */}
        <div className='hidden md:block'>
          {/* <img src={heroImage1} alt="" className='object-cover object-center rounded' /> */}

          <iframe width="560" height="315" src="https://www.youtube.com/embed/bZtTlpPOOmI?si=AJAvEKobhGOojeob" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='object-center'></iframe>
        </div>

        <div className='flex w-full aspect-w-16 aspect-h-9 md:hidden mt-5'>
          {/* <img src={heroImage1} alt="" className='object-cover object-center rounded' /> */}
          <iframe src="https://www.youtube.com/embed/bZtTlpPOOmI?si=AJAvEKobhGOojeob"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          
        </div>

        <img src={heroBackground} alt="" className='md:block absolute bottom-0 md:right-0 w-full xl:w-1/2 lg:w-[60%] md:w-[55%] -z-10' />
      </div>

      {/* Counter */}
      <section className="text-white body-font mt-20 bg-gradient-to-r from-blue-400 to-emerald-400">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="font-poppins font-semibold title-font sm:text-4xl text-3xl text-white">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={1000} end={5000} duration={2} delay={0} />}
                </ScrollTrigger>
              </h2>
              <p className="leading-relaxed">Usuarios</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="font-poppins font-semibold title-font sm:text-4xl text-3xl text-white">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={10000} end={15000} duration={2} delay={0} />}
                </ScrollTrigger>
              </h2>
              <p className="leading-relaxed">Guías creadas</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="font-poppins font-semibold title-font sm:text-4xl text-3xl text-white">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={1} end={50} duration={2} delay={0} />}
                </ScrollTrigger>
              </h2>
              <p className="leading-relaxed">Grupos de Apoyo</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="font-poppins font-semibold title-font sm:text-4xl text-3xl text-white">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={1} end={20} duration={2} delay={0} />}
                </ScrollTrigger>
              </h2>
              <p className="leading-relaxed">Enfermedades</p>
            </div>
          </div>
        </div>
      </section>




      {/* Sección: Herramientas para pacientes */}
      <section className="text-gray-600 body-font mt-15">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-poppins font-semibold mb-2 text-slate-800 dark:text-white">
              Herramientas para pacientes
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>



          {/* Trajetas */}
          <div className="flex flex-wrap -m-4">

            {/* Tarjeta 1 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col text-center items-center">
              <div className="border border-gray-100 dark:border-gray-600 p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600 text-pink-500 mb-4">
                  <img className="w-14 h-14" src={!darkTheme ? icono1 : iconoBlanco1} alt="" />
                </div>
                <h2 className="text-lg text-slate-800 font-poppins font-semibold title-font mb-2 dark:text-white">
                  Guías personalizadas
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-400">
                  Completa tu información y recibe guías personalizadas para tu
                  condición.
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-10 mb-10">
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least 10 characters
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least one lowercase character
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least 10 characters
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least one lowercase character
                  </li>
                </ul>
                <button className="flex mx-auto mt-5 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
                  Comenzar
                </button>
              </div>
            </div>


            {/* Tarjeta 2 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col text-center items-center">
              <div className="border border-gray-100 dark:border-slate-600 p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-600 mb-4">
                  <img className="w-14 h-14" src={!darkTheme ? icono2 : iconoBlanco2} alt="" />
                </div>
                <h2 className="text-lg text-slate-800 dark:text-white font-poppins font-semibold title-font mb-2">
                  Chat con asistente virtual
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-400">
                  Completa tu información y recibe guías personalizadas para tu
                  condición.
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-10 mb-10">
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least 10 characters
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least one lowercase character
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least 10 characters
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least one lowercase character
                  </li>
                </ul>
                <button className="flex mx-auto mt-5 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
                  Comenzar
                </button>
              </div>
            </div>



            {/* Tarjeta 3 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col text-center items-center">
              <div className="border border-gray-100 dark:border-slate-600 p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-600 text-pink-500 mb-4">
                  <img className="w-14 h-14" src={!darkTheme ? icono3 : iconoBlanco3} alt="" />
                </div>
                <h2 className="text-lg text-slate-800 dark:text-white font-poppins font-semibold title-font mb-2">
                  Grupos de pacientes
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-400">
                  Completa tu información y recibe guías personalizadas para tu
                  condición.
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-10 mb-10">
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least 10 characters
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least one lowercase character
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least 10 characters
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least one lowercase character
                  </li>
                </ul>
                <button className="flex mx-auto mt-5 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
                  Comenzar
                </button>
              </div>
            </div>



            {/* Tarjeta 4 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col text-center items-center">
              <div className="border border-gray-100 dark:border-slate-600 p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-600 text-pink-500 mb-4">
                  <img className="w-14 h-14" src={!darkTheme ? icono4 : iconoBlanco4} alt="" />
                </div>
                <h2 className="text-lg text-slate-800 dark:text-white font-poppins font-semibold title-font mb-2">
                  Búsqueda de tratamiento
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-400">
                  Completa tu información y recibe guías personalizadas para tu
                  condición.
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-10 mb-10">
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least 10 characters
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least one lowercase character
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least 10 characters
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    At least one lowercase character
                  </li>
                </ul>
                <button className="flex mx-auto mt-5 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
                  Comenzar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>










      <section id='guias' className="text-gray-600 body-font mx-5">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={imgPaciente}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-xl mb-4 text-slate-900 dark:text-white font-poppins font-semibold">
              La información puede confundirte.
            </h1>
            <h2 className="sm:text-2xl text-3xl mb-4 text-slate-900 dark:text-white font-poppins font-light">
              Crea guías personalizadas para tu condición.
            </h2>
            <p className="mb-8 leading-relaxed dark:text-gray-400">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
              tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
              chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg hover:shadow-lg hover:shadow-yellow-500/50 transition">
                Crear guías
              </button>
            </div>
          </div>
        </div>
      </section>




      <section id='chat' className="text-gray-600 body-font mx-5">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 text-slate-900 dark:text-white font-poppins font-semibold">
              ¿Muchas dudas sobre tu salud?
            </h1>
            <h2 className="sm:text-2xl text-xl mb-4 text-slate-900 dark:text-white font-poppins font-light">
              Resuelve tus dudas en un chat de inteligencia artifical siempre disponible para tí.
            </h2>
            <p className="mb-8 leading-relaxed dark:text-gray-400">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
              tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
              chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg hover:shadow-lg hover:shadow-yellow-500/50 transition">
                Unirme a grupos de apoyo
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-10 md:mt-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={imgPaciente}
            />
          </div>
        </div>
      </section>



      <section id='grupos' className="text-gray-600 body-font mx-5">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={imgPaciente}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-xl mb-4 text-slate-900 dark:text-white font-poppins font-semibold">
              ¡No estás solo o sola!
            </h1>
            <h2 className="sm:text-2xl text-3xl mb-4 text-slate-900 dark:text-white font-poppins font-light">
              Hay muchos pacientes como tú en nuestros grupos de apoyo.
            </h2>
            <p className="mb-8 leading-relaxed dark:text-gray-400">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
              plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
              tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
              chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg hover:shadow-lg hover:shadow-yellow-500/50 transition">
                Unirme a grupos de apoyo
              </button>
            </div>
          </div>
        </div>
      </section>





















      <section id='tratamiento' className="text-gray-600 body-font mt-20 pt-10 pb-20 md:pl-20 md:pr-20 ">
        <div className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-poppins font-semibold mb-2 text-slate-800 dark:text-white">
            Búsqueda de tratamientos modernos
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 1
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                    bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 2
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                    slow-carb health goth, vape typewriter.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={5} r={3} />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 3
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    Coloring book nar whal glossier master cleanse umami. Salvia +1
                    master cleanse blog taiyaki.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 4
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                    bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 5
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    Pitchfork ugh tattooed scenester echo park gastropub whatever
                    cold-pressed retro.
                  </p>
                </div>
              </div>
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 mt-10 px-6 focus:outline-none hover:bg-pink-400 rounded text-lg hover:shadow-lg hover:shadow-pink-500/50 transition">
                Buscar tratamiento
              </button>
            </div>
            <img
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src={homeImage}
              alt="step"
            />
          </div>
        </div>
      </section>











      <section className="text-gray-600 body-font my-36">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-poppins font-semibold mb-2 text-slate-800 dark:text-white">
            Pacientes que hemos ayudado
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/302x302"
                />
                <p className="leading-relaxed dark:text-gray-400">
                  Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                  taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
                  taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                  fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-white">
                  Nombre de paciente
                </h2>
                <p className="text-gray-500 dark:text-white">Cáncer de pulmón</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/300x300"
                />
                <p className="leading-relaxed dark:text-gray-400">
                  Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                  taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
                  taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                  fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 dark:text-white font-medium title-font tracking-wider text-sm">
                  Nombre de paciente
                </h2>
                <p className="text-gray-500 dark:text-white">Cáncer gástrico</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/305x305"
                />
                <p className="leading-relaxed dark:text-gray-400">
                  Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                  taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
                  taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                  fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 dark:text-white font-medium title-font tracking-wider text-sm">
                  Nombre de paciente
                </h2>
                <p className="text-gray-500 dark:text-white">Cáncer de mama</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="my-36 bg-gradient-to-b from-blue-400 via-blue-500 to-purple-600 text-white pt-8 pb-4">
        <h2 className="text-center text-2xl mb-2 font-poppins font-bold leading-8">
          Colaboradores
        </h2>
        <p className="text-center text-lg font-poppins font-light leading-8 ">
          Insituciones que nos apoyan y trabajan con nosotros
        </p>
        <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            {/* Ensure that the images cover entire screen width for a smooth transition */}
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoBiocenter}
              alt="Transistor"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoCop}
              alt="Reform"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoSaga}
              alt="Reform"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoJamesLynd}
              alt="Tuple"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoGenoma}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoSanofi}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoIncubaUc}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoCorfo}
              alt="SavvyCal"
            />
          </div>
          {/* Duplicate of the above for infinite effect (you can use javascript to duplicate this too) */}
          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            {/* Ensure that the images cover entire screen width for a smooth transition */}
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoBiocenter}
              alt="Transistor"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoCop}
              alt="Reform"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoSaga}
              alt="Reform"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoJamesLynd}
              alt="Tuple"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoGenoma}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoSanofi}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoIncubaUc}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoCorfo}
              alt="SavvyCal"
            />
          </div>
        </div>
      </section>




      <section className="text-gray-600 body-font my-20" id="nosotros">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-poppins title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Sobre Nosotros
            </h1>
            <p className="mb-8 leading-relaxed dark:text-gray-400">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
              typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            </p>
            <Accordion open={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className='dark:text-gray-400'>¿Qué es Guía y Salud?</AccordionHeader>
              <AccordionBody className='dark:text-gray-400'>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)} className='dark:text-gray-400'>
                ¿A quiénes ayuda Guía y Salud?
              </AccordionHeader>
              <AccordionBody className='dark:text-gray-400'>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)} className='dark:text-gray-400'>
                ¿Cómo se financia Guía y Salud?
              </AccordionHeader>
              <AccordionBody className='dark:text-gray-400'>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>



        </div>
      </section>











      <footer className="overflow-x-hidden">
        <div className=" bottom-0 mt-[100px] ml-[-50%] h-auto w-[200%] rounded-t-[100%] bg-gradient-to-b from-blue-400 via-blue-500 to-purple-600">
          <div className="mt-5 text-center text-2xl text-white">

            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="font-poppins title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    Páginas
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <Link to="/" className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg ">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/login" className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg ">Ingresar</Link>
                    </li>
                    <li>
                      <Link to="/registrar" className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg ">Crear Cuenta</Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg ">Blog</Link>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="font-poppins title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    Herramientas
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a href='#guias' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Guías personalizadas</a>
                    </li>
                    <li>
                      <a href='#chat' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Chat IA</a>
                    </li>
                    <li>
                      <a href='#grupos' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Grupos de apoyo</a>
                    </li>
                    <li>
                      <a href='#tratamiento' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Búsqueda de tratamiento</a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    Redes Sociales
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a href='www.instagram.com' target='_blank' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Instagram</a>
                    </li>
                    <li>
                      <a href='www.instagram.com' target='_blank' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Facebook</a>
                    </li>
                    <li>
                      <a href='www.instagram.com' target='_blank' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Linkedin</a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    Subscríbete a nuestras noticias
                  </h2>
                  <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                      <label
                        htmlFor="footer-field"
                        className="leading-7 text-sm text-gray-100"
                      >
                        Correo:
                      </label>
                      <input
                        type="text"
                        id="footer-field"
                        name="footer-field"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded">
                      Enviar
                    </button>
                  </div>
                  <p className="text-gray-100 text-sm mt-2 md:text-left text-center">
                    Al enviar tu correo electrónico estarás subscrito a nuestros boletines de noticias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Inicio;
