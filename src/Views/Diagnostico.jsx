import React, { useState } from 'react';
import Diagnostic from '../components/Diagnostic';

const Diagnostico = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      setExpanded(!expanded);
    } else {
      setExpanded('');
    }
  };

  return (
    <>
      <div className=" wrapper grip grap-8 justify-items-center items-center text-center">
        <h3 className="text-3xl font-bold my-7 sm:text-xl">Diagnóstico</h3>
        <p className="text-base font-light leading-5  mb-5 max-w-7xl mx-auto text-center sm:text-sm sm:w-11/12">
          Nuestra encuesta está diseñada para apoyar a emprendedores como tú a
          obtener una
          <span className="font-bold text-base sm:text-sm">
            {' '}
            visión clara de su situación actual
          </span>{' '}
          en diversos aspectos cruciales de sus negocios. Al responder
          honestamente a las{' '}
          <span className="font-bold text-base sm:text-sm">
            18 preguntas
          </span>{' '}
          de nuestros seis principales pilares estratégicos, estarás trazando el
          camino hacia un crecimiento organizacional más sólido y sostenible.
        </p>
        <div
          className={
            'max-w-7xl mx-auto text-center sm:w-11/12 flex md:visible flex-col  items-center sm:flex justify-between  '
          }
        >
          {expanded && (
            <p className="text-base font-light leading-5">
              {' '}
              La meta de nuestra encuesta es proporcionarte una{' '}
              <span className="font-bold text-base sm:text-sm">
                valiosa devolución basada en tus respuestas.
              </span>{' '}
              Queremos ofrecerte insights perspicaces que te permitan entender
              mejor tu posición actual en áreas claves de tu emprendimiento.
              Esta información te brindará la guía necesaria para tomar
              decisiones informadas y estratégicas.
            </p>
          )}
          <button
            className="bg-tranparent text-black text-xs font-normal  rounded  ml-auto focus:outline-none sm:mt-2 md:invisible"
            onClick={handleToggle}
          >
            {expanded ? 'Leer menos ▲' : 'Leer más ▼'}
          </button>
        </div>
      </div>
      <div className="my-6 mx-10">
        <Diagnostic />
      </div>
      <p className="text-lg font-normal max-w-7xl mx-auto text-center sm:font-normal sm:text-sm sm:w-11/12">
        Creemos en el poder de la información para impulsar el cambio positivo.
        Al unirte a nosotros, no solo contribuirás a tu propio crecimiento, sino
        que también formarás parte de una comunidad comprometida con el progreso
        mutuo. Gracias por ser parte de nuestra comunidad. Estamos emocionados
        de acompañarte en tu camino hacia el éxito empresarial. ¡Adelante,
        emprendedor!{' '}
      </p>
    </>
  );
};

export default Diagnostico;
