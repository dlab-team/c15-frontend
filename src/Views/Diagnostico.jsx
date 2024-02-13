import React from 'react';
import { Link } from 'react-router-dom';

const Diagnostico = () => {
  return (
    <div className="flex flex-col items-center pt-12 space-y-8">
      <h3 className="text-4xl font-bold uppercase ">Diagnóstico</h3>

      <p class="max-w-7xl mx-auto text-xl text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button class="flex mx-auto mt-6 text-white text-2xl font-bold bg-[#6EAD15] border-0 py-2 px-7 rounded-full">
        <Link to="/resultados">Enviar</Link>
      </button>
    </div>
  );
};

export default Diagnostico;
