import axios from "axios"
import { useState } from "react"
import {  Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const EditarPilar = () => {
  const [pilarEditado, setPilarEditado] = useState("")
  const navigate = useNavigate()
  const params = useParams()

  const putPilar = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/pillar/${params.id}`, {"name": pilarEditado})
      const data = response.data
      setPilarEditado("")
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Pillar editado exitosamente 😀.',
      });
    } catch (error) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: `Error al editar el nuevo pillar : ${error}`,
      });
    }
  }
  return (
    <div className='flex flex-col items-center mt-10 mb-20'>
        <h1 className='text-2xl font-bold text-[var(--primary)] mb-5'>Editar Pilar</h1>
        <form onSubmit={putPilar} className='flex flex-col items-center w-[90%] lg:w-[60%] rounded-lg border-2 shadow-md shadow-slate-500 pt-5 pb-10'>
            <h2 className='text-2xl text-[var(--pink)] font-bold'>Nombre del Pilar</h2>
            <input type="text" name="nombre_pillar" value={pilarEditado} placeholder='Ingresa el nombre' className="w-[60%] my-5 pl-2 rounded-lg border-2 border-gray-500 shadow-md" required onChange={(e) => setPilarEditado(e.target.value)}/>
            <button type="submit" className="mt-5 bg-[var(--pink)] py-3 px-10 rounded-3xl shadow-lg text-white font-medium hover:bg-[var(--secondary)] hover:text-[var(--pink)] hover:duration-300  md:w-[30%] md:mx-auto">Guardar</button>
            <Link to="/Admin/Pilares" className="mt-5 text-center bg-[var(--secondary)] py-3 px-10 rounded-3xl shadow-lg text-[var(--primary)] font-medium hover:bg-[var(--pink)] hover:text-[var(--white)] hover:duration-300  md:w-[30%] md:mx-auto">Volver</Link>
        </form>
    </div>
  )
}

export default EditarPilar