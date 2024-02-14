import React, { useState, useEffect } from 'react';
import Pillar from './Pillar';
import data from '../data/data.json';

const Diagnostic = () => {
  const [pillars, setPillars] = useState([]);

  useEffect(() => {
    setPillars(data);
  }, []);

  return (
    <>
      <div>
        {pillars.map((pillar) => (
          <Pillar key={pillar.pillar_id} pillar={pillar} />
        ))}
      </div>
      <button className="flex mx-auto my-20 text-white text-sm font-black bg-[#6EAD15] border-0 py-2 px-7 rounded-full uppercase">
        enviar encuesta
      </button>
    </>
  );
};

export default Diagnostic;
