import axios from "axios"
import { useState } from "react"
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CrearPilar = () => {
  const [nuevoPilar, setNuevoPilar] = useState("")
  const navigate = useNavigate()
  
  const postNuevoPilar = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/pillar/create`, {"name": nuevoPilar})
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Pillar creado exitosamente 😀.',
      });
      setNuevoPilar("")
      navigate("/Admin/Pilares")

    } catch (error) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: `Error al crear el nuevo pillar : ${error}`,
      });
    }
  }
  return (
    <div className='flex flex-col items-center mt-10 mb-20'>
        <h1 className='text-2xl font-bold text-[var(--primary)] mb-5'>Crear Nuevo Pilar</h1>
        <form onSubmit={postNuevoPilar} className='flex flex-col items-center w-[90%] lg:w-[60%] rounded-lg border-2 shadow-md shadow-slate-500 pt-5 pb-10'>
            <h2 className='text-2xl text-[var(--pink)] font-bold'>Nombre del Pilar</h2>
            <input type="text" name="nombre_pillar" placeholder='Ingresa el nombre' className="w-[60%] my-5 pl-2 rounded-lg border-2 border-gray-500 shadow-md" required onChange={(e) => setNuevoPilar(e.target.value)}/>
            <button type="submit" className="mt-5 bg-[var(--pink)] py-3 px-10 rounded-3xl shadow-lg text-white font-medium hover:bg-[var(--secondary)] hover:text-[var(--pink)] hover:duration-300  md:w-[30%] md:mx-auto">Guardar</button>
        </form>
    </div>
  )
}

export default CrearPilar