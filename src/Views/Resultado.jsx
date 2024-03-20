import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from '../components/Chart';
import Table from '../components/Table';
import ResultsMessage from '../components/ResultsMessage';
import { Link } from 'react-router-dom';

const Resultado = () => {
  const [dataResults, setDataResults] = useState([]);
  useEffect(() => {
    getDataResults();
  }, []);

  const getDataResults = async () => {
    try {
      const companyId = 3;
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/diagnostic/${companyId}`
      );
      setDataResults(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error.message);
      console.error('Detalles adicionales:', error.response);
    }
  };

  return (
    <main className="pb-[40px]">
      <div className="pt-[40px]">
        <h1 className="text-center text-[var(--primary)] font-black text-3xl">
          Resultado Diagnostico
        </h1>
        <p className="text-center text-[var(--primary)]">
          Interpretación de resultado
        </p>
      </div>
      <div className="p-[30px]">
        <Table dataResults={dataResults} />
      </div>
      <div>
        <ResultsMessage dataResults={dataResults} />
        <Link
          to="/"
          className="bg-[var(--primary)] flex justify-center items-center h-[50px] w-[100px] m-auto rounded-3xl text-white font-black"
        >
          Home
        </Link>
      </div>
    </main>
  );
};

export default Resultado;
