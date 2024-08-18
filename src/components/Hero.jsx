import React from 'react';
import home from "../assets/home.png"; // Importa la imagen del logo

const Hero = () => {
  return (
    <section className="bg-gray-100 py-10 mt-0" style={{ height: '90vh' }}>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 items-center h-full">
        {/* Texto */}
        <div className="col-span-3 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-blue-900">
            Apoyo, guía y acompañamiento para pacientes
          </h1>
          <p className="mt-4 text-sm text-blue-900">
            Unidos podemos todo.
          </p>
          <button className="mt-4 w-48 px-4 py-2 bg-purple-900 font-bold text-white rounded-custom-xl mx-auto md:mx-0">
            Comenzar
          </button>
        </div>
        {/* Imagen */}
        <div className="col-span-2 flex justify-center md:justify-end">
          <img
            src={home}
            alt="Salud"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
