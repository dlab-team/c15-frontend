import React from 'react';
import { Link } from 'react-router-dom';
import QuestionEdit from '../components/QuestionEdit';

function PreguntaAdmin() {
  return (
    <div className="grid justify-items-center text-[var(--primary)] p-32 space-y-16 ">
      <div className="grid space-y-8">
        <h2 className="text-4xl font-normal sm:text-xl md:text-2xl lg:text-4xl">
          Preguntas de la Encuesta
        </h2>
        <p className="justify-self-center text-2xl font-extrabold text-[var(--primary)] sm:text-sm md:text-lg lg:text-2xl">
          Modificar
        </p>
      </div>
      <div className="grid justify-items-center border-4 rounded-lg p-16 space-y-8 sm:p-8 md:p12 lg:p-16">
        <h3 className="text-3xl font-bold text-[var(--pink)] sm:text-sm md:text-xl lg:text-3xl">
          Pilar Tributario
        </h3>
        <textarea
          className="focus:outline-none focus:ring focus:ring-[var(--primary)] focus:border focus:border-[var(--primary)]"
          placeholder="Escribe tu pregunta aquí"
        ></textarea>
        <QuestionEdit />
      </div>
      <div>
        <Link to="#">
          <button className="flex mx-auto mt-5 font-medium text-white text-sm bg-[var(--pink)] border-0 py-2 px-7 rounded-full sm:text-sm md:text-lg lg:text-xl">
            Guardar
          </button>
        </Link>
        <Link to="#">
          <button className="flex mx-auto mt-10 font-medium text-black text-sm bg-[var(--secondary)] border-0 py-2 px-9 rounded-full max-sm:font-black sm:text-sm md:text-lg lg:text-xl">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PreguntaAdmin;
