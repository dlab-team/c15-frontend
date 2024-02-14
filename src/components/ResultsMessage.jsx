import React from 'react'

const ResultsMessage = ({dataResults}) => {
if (!dataResults || dataResults.length !== 6) {
        return 'Problemas al cargar el resultado'
      }
      const descripciones = dataResults.map(item => item.description).join(" ")
  return (
    <div className='flex flex-col p-10 lg:w-[80%] m-auto' >
      <h3 className='text-[var(--green)] font-black text-xl py-3'>Interpretacion de resultados:</h3>
      <p>{descripciones}</p>
    </div>
  )
}
export default ResultsMessage