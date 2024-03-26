import {useState, useEffect} from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan, faPencil} from '@fortawesome/free-solid-svg-icons';

const Pilares = () => {
    const [pillars, setPillars] = useState([]);

    const getPillars = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + "/pillar");
            const data = response.data;
            setPillars(Object.values(data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPillars();
    }, []);
    
    console.log(pillars)


  return (
    <div className='flex flex-col items-center mt-10'>
        <h1 className='text-2xl text-[var(--primary)] mb-5'>Administrador de Pilares</h1>
        <div className='flex flex-col items-center w-[90%] lg:w-[60%] rounded-lg border-2 shadow-md shadow-slate-500 pt-5 pb-10'>
            <h2 className='text-2xl text-[var(--pink)] font-bold'>Vista General</h2>
            {
                pillars.map((element, index) => (
                    <div className="flex w-[80%] gap-2 mt-5 justify-center items-center" key={index}>
                        <span className="w-[65%] lg:w-[70%] text-lg text-[var(--primary)]">{element.name}</span>
                        <span className="w-[15%] lg:w-[10%] bg-[var(--primary)] rounded-lg text-white text-center">20%</span>
                        <span className="w-[10%] text-center border-2 text-[var(--primary)]"><FontAwesomeIcon icon={faTrashCan} /></span>
                        <span className="w-[10%] text-center border-2 text-[var(--primary)]"><FontAwesomeIcon icon={faPencil} /></span>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Pilares