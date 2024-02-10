import React from 'react'

const Table = ({dataResults}) => {
    const getColor = (value) => {
        let colorResultado = '';
        let valueResultado = '';
        if (value >= 75) {
          colorResultado = 'bg-[var(--alto)]';
          valueResultado = 'ALTO';
        } else if (value < 75 && value >= 41) {
          colorResultado = 'bg-[var(--medio)] bg-opacity-60';
          valueResultado = 'MEDIO';
        } else if (value < 41 && value >= 16) {
          colorResultado = 'bg-[var(--bajo)]';
          valueResultado = 'BAJO';
        } else {
          colorResultado = 'bg-[var(--muybajo)] bg-opacity-10';
          valueResultado = 'MUY BAJO';
        }
        return { colorResultado, valueResultado };
      };


 
  return (
    <table className='lg:w-[60%] flex flex-col items-center p-2.5 border-b-2 border-[var(--primary)] m-auto'>
        <thead className='w-[90%] lg:w-[100%]'>
            <tr className='flex border-b-2 border-[var(--primary)]'>
                <th className='w-[40%] text-start'>Pilar a evaluar</th>
                <th className='w-[30%]'>% Resultado</th>
                <th className='w-[30%] text-center'>Estado actual</th>
            </tr>
        </thead>
        <tbody className='w-[90%] lg:w-[100%]'>
        {dataResults.map((item, index) => {
          const { pillar, value } = item;
          const { colorResultado, valueResultado } = getColor(value);
          return (
            <tr className='flex' key={index}>
              <td className='w-[40%] text-start flex items-center h-[50px]'>{pillar}</td>
              <td className={'w-[30%] h-[50px] text-center flex justify-center items-center'}><span className={`w-[40px] h-[40px] rounded-3xl flex items-center justify-center text-white ${colorResultado}`}>{value}</span></td>
              <td className='w-[30%] flex justify-center items-center h-[50px]'>{valueResultado}</td>
            </tr>
          );
        })} 
        </tbody>
    </table>
  )
}

export default Table