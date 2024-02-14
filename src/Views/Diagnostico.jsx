import React from 'react';
import Diagnostic from '../components/Diagnostic';

const Diagnostico = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="text-3xl font-bold my-7 ">Diagnóstico</h3>
        <p className="text-base font-light leading-5  mb-5 max-w-7xl mx-auto text-cente">
          Nuestra encuesta está diseñada para apoyar a emprendedores como tú a
          obtener una
          <span className="font-bold text-base">
            {' '}
            visión clara de su situación actual
          </span>{' '}
          en diversos aspectos cruciales de sus negocios. Al responder
          honestamente a las{' '}
          <span className="font-bold text-base">18 preguntas</span> de nuestros
          seis principales pilares estratégicos, estarás trazando el camino
          hacia un crecimiento organizacional más sólido y sostenible.
        </p>
        <p className="text-base font-light leading-5 max-w-7xl mx-auto text-cente">
          La meta de nuestra encuesta es proporcionarte una{' '}
          <span className="font-bold">
            valiosa devolución basada en tus respuestas.
          </span>{' '}
          Queremos ofrecerte insights perspicaces que te permitan entender mejor
          tu posición actual en áreas claves de tu emprendimiento. Esta
          información te brindará la guía necesaria para tomar decisiones
          informadas y estratégicas.
        </p>
      </div>
      <div className="my-20 mx-28">
        <Diagnostic />
      </div>
    </>
  );
};

export default Diagnostico;
