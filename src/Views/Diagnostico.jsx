import React from 'react';
import Diagnostic from '../components/Diagnostic';

const Diagnostico = () => {
  return (
    <>
      <div>
        <h3 className="text-3xl font-bold">Diagnóstico</h3>
        <p className="text-base">
          Nuestra encuesta está diseñada para apoyar a emprendedores como tú a
          obtener una visión clara de su situación actual en diversos aspectos
          cruciales de sus negocios. Al responder honestamente a las 18
          preguntas de nuestros seis principales pilares estratégicos, estarás
          trazando el camino hacia un crecimiento organizacional más sólido y
          sostenible.
        </p>
        <p>
          La meta de nuestra encuesta es proporcionarte una valiosa devolución
          basada en tus respuestas. Queremos ofrecerte insights perspicaces que
          te permitan entender mejor tu posición actual en áreas claves de tu
          emprendimiento. Esta información te brindará la guía necesaria para
          tomar decisiones informadas y estratégicas.
        </p>
      </div>
      <div className="my-20 mx-28">
        <Diagnostic />
      </div>
    </>
  );
};

export default Diagnostico;

// respuesta: '/answers/process/'
// termina el questionario: /diagnostic/process/:id
