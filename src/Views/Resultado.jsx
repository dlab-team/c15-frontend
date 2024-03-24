import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import AuthContext from "../context/Context";
import axios from "axios";
import Chart from "../components/Chart";
import Table from "../components/Table";
import ResultsMessage from "../components/ResultsMessage";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";

const Resultado = () => {
  const { userData } = useContext(AuthContext);
  const contentRef = useRef(null);
  const companyId =
    userData && userData.Companies && userData.Companies.length > 0
      ? userData.Companies[0].id
      : null;
  const [dataResults, setDataResults] = useState([]);
  useEffect(() => {
    getDataResults();
  }, []);

  const getDataResults = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/diagnostic/${companyId}`
      );
      setDataResults(response.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error.message);
      console.error("Detalles adicionales:", error.response);
    }
  };

  const handleDownloadPDF = () => {
    const content = contentRef.current;

    html2pdf()
      .from(content)
      .set({
        margin: [ 0, 0, 0, 0],
        filename: "Resultados_Diagnostico.pdf",
      })
      .save();
  };

  return (
    <main className="pb-[10px]">
      <div className="pt-[10px]" ref={contentRef}>
        <h1 className="text-center text-[var(--primary)] font-black text-3xl">
          Resultado Diagnostico
        </h1>

        <p className="text-center p-2 text-[var(--primary)]">
          Interpretación de resultado
        </p>
      
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Chart dataResults={dataResults} />
      </div>
      <div>
        <div className="p-[10px]">
          <Table dataResults={dataResults} />
        </div>

        <ResultsMessage dataResults={dataResults} />
      </div>  
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Link
          to="/"
          className="bg-[var(--primary)] flex justify-center items-center h-[50px] w-[100px] rounded-3xl text-white font-black"
        >
          Home
        </Link>
        <button
          onClick={handleDownloadPDF}
          className="bg-[var(--pink)] flex justify-center items-center h-[50px] w-[150px] rounded-3xl text-white font-black"
        >
          Descargar en PDF
        </button>
        </div> 
    </main>
  );
};

export default Resultado;
