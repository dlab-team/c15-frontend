import React from 'react'

const ResultsMessage = ({dataResults}) => {
if (!dataResults) {
        return 'Problemas al cargar el resultado'
      }
  return (
    <div className='flex flex-col lg:w-[80%] m-auto' >
      <h3 className='text-[var(--pink)] font-black text-xl py-3'>Interpretacion de resultados:</h3>
      <div className='mt-5'>
      {dataResults.map((element, index) => (
        <div key={index}>
          <h3 className='font-black text-[var(--primary)]'>{element.pillar}{" "}({element.value}%)</h3>
          <p className='py-5 text-[var(--primary)]'>{element.description}</p>
        </div>
      ))}
    </div>
    </div>
  )
}
export default ResultsMessage