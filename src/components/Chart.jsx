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

ChartJS.defaults.borderColor = 'rgba(233, 125, 0, 1)';


const Chart = ({dataResults}) => {
  if (!dataResults || dataResults.length !== 6) {
    return 'Problemas al cargar la grafica'
  }
    const data = {
        labels: ['Tributario', ['Planificacion', 'Estrategica'], 'KPI', ['Desarrollo', 'de', 'Equipos'], 'Venta', 'Marketing'],
        datasets: [
          {
            label: 'Puntuacion',
            data: [dataResults[0].value, dataResults[1].value, dataResults[2].value, dataResults[3].value, dataResults[4].value, dataResults[5].value],
            backgroundColor: 'rgba(137, 54, 133, 0.2)',
            borderColor: '#893685',
            pointBackgroundColor: '#893685',
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
                    color: 'rgba(233, 125, 0, 1)',
                    font: {
                        size:14
                    },
                    stepSize: 20,
                    
                },
                pointLabels: {
                    display:true,
                    color: '#000000',
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