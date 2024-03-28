import {useState, useEffect} from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil} from '@fortawesome/free-solid-svg-icons';
import Switch from '../../components/Switch';
import { Link } from 'react-router-dom';

const Pilares = () => {
    const [pillars, setPillars] = useState([]);

    const getPillars = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + "/pillar");
            const data = response.data;
            data.sort((a, b) => a.id - b.id);
            setPillars(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPillars();
    }, []);


  return (
    <div className='flex flex-col items-center mt-10 mb-20'>
        <h1 className='text-2xl text-[var(--primary)] mb-5'>Administrador de Pilares</h1>
        <div className='flex flex-col items-center w-[90%] lg:w-[60%] rounded-lg border-2 shadow-md shadow-slate-500 pt-5 pb-10'>
            <h2 className='text-2xl text-[var(--pink)] font-bold'>Vista General</h2>
            <Link to="/Admin/CrearPilar" className='self-end my-5 mx-10 px-5 py-3 bg-[var(--primary)] shadow-lg text-white font-bold rounded-full'>Nuevo pillar</Link>
            {
                pillars.map((element, index) => (
                    <div className="flex w-[80%] gap-2 mt-5 justify-center items-center" key={index}>
                        <span className="w-[65%] lg:w-[70%] text-lg text-[var(--primary)]">{element.name}</span>
                        <Switch id={element.id} name={element.name} active={element.active}/>
                        <Link to={`/Admin/EditarPilar/${element.id}`} className="w-[10%] text-center text-[var(--primary)]"><FontAwesomeIcon icon={faPencil} /></Link>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Pilares