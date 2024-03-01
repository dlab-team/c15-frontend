import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

ChartJS.defaults.borderColor = 'rgba(219, 23, 129, 1)';


const Chart = ({dataResults}) => {
  if (!dataResults) {
    return 'Problemas al cargar la grafica'
  }
  
  const pillarsArray = dataResults.map(element => element.pillar)
  //El split en pillarsGrafic separa los pilares que tengan mas de 1 palabra para que en el grafico se muestre uno debajo del otro
  const pillarsGrafic = pillarsArray.map(element =>{
    if(element.includes(' ')){
      return element.split(' ')
    }else {
      return element
    }
  })
  //Las labels del grafico toma los datos de pillarsValues lo que permite ingresar más o menos pilares y no se rompe el grafico
  const pillarsValues = dataResults.map(element => element.value)

    const data = {
        labels: pillarsGrafic,
        datasets: [
          {
            label: 'Puntuacion',
            data: pillarsValues,
            backgroundColor: 'rgba(47, 42, 96, 0.2)',
            borderColor: 'rgba(47, 42, 96, 1)',
            pointBackgroundColor: 'rgba(47, 42, 96, 1)',
            borderWidth: 4,
          },
        ],
      };
    const options = {
        plugins: {
            legend: {display: false},
        },
        scales: {
            r: {
                min: 0,
                max: 100,
                ticks: {
                    color: 'rgba(219, 23, 129, 1)',
                    font: {
                        size:14
                    },
                    stepSize: 20,
                    
                },
                pointLabels: {
                    display:true,
                    color: 'rgba(47, 42, 96, 1)',
                    font:{
                        size:14,
                        weight: 'bold',
                    },
                }
            }
        },
        maintainAspectRatio: false,
    }
    return (
    <Radar data={data} className='h-[300px] lg:h-[500px]'
    options={options}/>
  )
}

export default Chart