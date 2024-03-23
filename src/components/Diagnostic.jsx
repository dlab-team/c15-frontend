import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/Context';
import Pillar from './Pillar';
import { Suspense } from 'react';
import { fetchData } from '../fetchData';
import { Link } from 'react-router-dom';

//  peticion questionario y usuario
const apiData = fetchData(`${import.meta.env.VITE_API_URL}/questionnarie`);
// const dataUser = fetchData('http://localhost:3000/diagnostic/process/:id');

const Diagnostic = () => {
  const { userData } = useContext(AuthContext);
  const companyId =
    userData && userData.Companies && userData.Companies.length > 0
      ? userData.Companies[0].id
      : null;
  const [pillars, setPillars] = useState([]);
  const data = apiData.read();

  useEffect(() => {
    setPillars(data);
  }, []);

  // paginacion
  const [actualPage, setActualPage] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 550, behavior: 'smooth' });
  }, [actualPage]);

  const handlePageTurn = (page) => {
    setActualPage(page);
  };
  const itemsPerPage = 1;
  const totalPages = Math.ceil(pillars.length / itemsPerPage);

  // Capturar seleccion
  const [selections, setSelections] = useState({});
  const handleSelection = (pillarId, questionId, selectedOptionId) => {
    const updatedSelections = { ...selections };
    updatedSelections[questionId] = {
      pillarId,
      questionId,
      selectedOptionId,
    };
    setSelections(updatedSelections);
    // console.log(selectedOptionId);
  };
  // Envio de respuestas
  const handleSendAnswers = () => {
    const requestBody = {
      company_id: companyId,
      answers: Object.values(selections).reduce((groupedAnswers, answer) => {
        const existingAnswer = groupedAnswers.find(
          (groupedAnswer) => groupedAnswer.pillar_id === answer.pillarId
        );

        if (existingAnswer) {
          existingAnswer.options.push({
            option_id: answer.selectedOptionId,
          });
        } else {
          groupedAnswers.push({
            pillar_id: answer.pillarId,
            options: [{ option_id: answer.selectedOptionId }],
          });
        }

        return groupedAnswers;
      }, []),
    };

    console.log(requestBody);
    fetch('http://localhost:3000/diagnostic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      // .then((data) => {
      //   console.log(data);
      // })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className=" pt-36 max-sm:pt-8 max-w-[100%]">
        <Suspense fallback={<div>Cargando...</div>}>
          {pillars
            .slice((actualPage - 1) * itemsPerPage, actualPage * itemsPerPage)
            .map((pillar) => (
              <Pillar
                key={pillar.pillar_id}
                pillar={pillar}
                onSelection={handleSelection}
              />
            ))}
        </Suspense>
      </div>
      {/* Páginacion */}
      <div className="flex items-center justify-center gap-8">
        <button
          disabled={actualPage === 1}
          className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => handlePageTurn(actualPage - 1)}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
          </span>
        </button>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Pilar <strong className="text-gray-900">{actualPage}</strong> de
          <strong className="text-gray-900"> {totalPages}</strong>
        </p>
        <button
          disabled={actualPage === totalPages}
          className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => handlePageTurn(actualPage + 1)}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {actualPage === totalPages && (
        <Link to="/Resultado">
          <button
            className="flex mx-auto mt-20 text-white text-sm font-black bg-[var(--pink)] border-0 py-2 px-7 rounded-full uppercase max-sm:font-black max-sm:text-sm md:text-xl"
            onClick={() => {
              handleSendAnswers();
            }}
          >
            Enviar encuesta
          </button>
        </Link>
      )}
    </div>
  );
};

export default Diagnostic;
