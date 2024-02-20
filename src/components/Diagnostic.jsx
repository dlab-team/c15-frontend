import React, { useState, useEffect } from 'react';
import Pillar from './Pillar';
import data from '../data/data.json';
import { Link } from 'react-router-dom';

const Diagnostic = () => {
  const [pillars, setPillars] = useState([]);

  useEffect(() => {
    setPillars(data);
  }, []);

  return (
    <>
      <div className="pt-36 max-sm:pt-8">
        {pillars.map((pillar) => (
          <Pillar key={pillar.pillar_id} pillar={pillar} />
        ))}
      </div>
      <Link to="/Resultado">
        <button className="flex mx-auto mt-20 text-white text-sm font-black bg-[#6EAD15] border-0 py-2 px-7 rounded-full uppercase max-sm:font-black max-sm:text-sm md:text-xl">
          Enviar encuesta
        </button>
      </Link>
    </>
  );
};

export default Diagnostic;
