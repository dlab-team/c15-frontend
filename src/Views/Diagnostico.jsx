import React, { useState, useEffect } from 'react';
import Diagnostic from '../components/Diagnostic';

const Diagnostico = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      setExpanded(!expanded);
    } else {
      setExpanded('');
    }
  };

  return (
    <div>
      <div className="wrapper grip grap-8 justify-items-center items-center text-center">
        <h3 className=" font-bold py-10 max-sm:text-3xl sm:text-3xl md:text-4xl">
          Diagnóstico
        </h3>
        <p className="text-2xl font-light leading-5  pb-8 max-w-7xl mx-auto text-justify max-sm:text-xl max-sm:w-10/12 sm:text-xl sm:w-10/12 md:text-2xl">
          Nuestra encuesta está diseñada para apoyar a emprendedores como tú a
          obtener una
          <span className="font-bold text-2xl max-sm:text-xl max-sm:font-light sm:font-light sm:text-xl md:text-2xl">
            {' '}
            visión clara de su situación actual
          </span>{' '}
          en diversos aspectos cruciales de sus negocios. Al responder
          honestamente a las{' '}
          <span className="font-bold text-2xl max-sm:text-xl max-sm:font-light sm:font-light sm:text-xl md:text-2xl">
            18 preguntas
          </span>{' '}
          de nuestros seis principales pilares estratégicos, estarás trazando el
          camino hacia un crecimiento organizacional más sólido y sostenible.
        </p>
        <div className="max-w-5xl mx-auto text-center  flex flex-col items-center max-sm:w-10/12">
          {expanded && (
            <p className="text-2xl font-light text-justify leading-5 sm:invisible max-sm:text-xl max-sm:font-light">
              {' '}
              La meta de nuestra encuesta es proporcionarte una{' '}
              <span className="font-bold text-2xl max-sm:text-xl max-sm:font-light">
                valiosa devolución basada en tus respuestas.
              </span>{' '}
              Queremos ofrecerte insights perspicaces que te permitan entender
              mejor tu posición actual en áreas claves de tu emprendimiento.
              Esta información te brindará la guía necesaria para tomar
              decisiones informadas y estratégicas.
            </p>
          )}
          <button
            className="bg-tranparent text-black text-base font-normal rounded ml-auto focus:outline-none max-sm:mt-2 sm:invisible"
            onClick={handleToggle}
          >
            {expanded ? 'Leer menos ▲' : 'Leer más ▼'}
          </button>
          <p className=" text-2xl font-light leading-7 absolute mb-5 max-w-7xl mx-auto text-justify sm:mb-4 sm:visible max-sm:invisible sm:font-light sm:text-xl sm:w-10/12 md:text-2xl">
            {' '}
            La meta de nuestra encuesta es proporcionarte una{' '}
            <span className="font-bold text-2xl max-sm:text-sm sm:font-light sm:text-xl md:text-2xl">
              valiosa devolución basada en tus respuestas.
            </span>{' '}
            Queremos ofrecerte insights perspicaces que te permitan entender
            mejor tu posición actual en áreas claves de tu emprendimiento. Esta
            información te brindará la guía necesaria para tomar decisiones
            informadas y estratégicas.
          </p>
        </div>
      </div>
      <div className="my-6 sm:mt-20 mx-24 max-sm:mx-14 sm:mx-14 md:mx-20 lg:mx-24  xl:mx-28 2xl:mx-56">
        <Diagnostic />
      </div>
      <p className="text-lg font-normal  text-justify pb-20 pt-10 max-w-7xl mx-auto max-sm:font-normal max-sm:text-xl max-sm:w-10/12 sm:w-10/12 sm:text-xl md:text-2xl">
        Creemos en el poder de la información para impulsar el cambio positivo.
        Al unirte a nosotros, no solo contribuirás a tu propio crecimiento, sino
        que también formarás parte de una comunidad comprometida con el progreso
        mutuo. Gracias por ser parte de nuestra comunidad. Estamos emocionados
        de acompañarte en tu camino hacia el éxito empresarial. ¡Adelante,
        emprendedor!
      </p>
    </div>
  );
};

export default Diagnostico;
