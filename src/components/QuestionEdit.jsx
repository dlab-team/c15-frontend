import React from 'react';

function QuestionEdit() {
  return (
    <div>
      <div>
        <h3>Componente Opcion de respuesta aqui.</h3>
      </div>
      <div>
        {' '}
        <button className="flex items-center justify-end  mx-auto mt-10 font-bold text-[var(--primary)]  text-xl bg-[var(--secondary)] border-0 py-2 px-9 rounded-full max-sm:font-[var(--primary)]  sm:text-sm md:text-lg lg:text-xl">
          Crear Opción
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2 text-[var(--secondary)] bg-[var(--primary)] rounded-full sm:text-sm md:text-lg lg:text-xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default QuestionEdit;
