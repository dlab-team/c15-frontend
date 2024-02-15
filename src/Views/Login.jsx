import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className='flex container h-[60vh]'>
      <div className='w-[50%] hidden lg:flex lg:justify-center lg:items-center' >
        <p className='text-3xl leading-loose w-[60%] text-center'>Contesta nuestro cuestionario para entregarte un <span className='text-[var(--primary)]'>diagnóstico de tu emprendimiento</span>, de manera gratuita </p>
      </div>
      <div className='lg:w-[50%] p-10 w-[100%] flex flex-col items-center justify-center'>
        <h1 className='text-3xl pt-[60px] pb-10 lg:p-10'>Iniciar sesión</h1>
        <form className='flex flex-col w-[100%]'>
          <input type="email" name="email" className="h-10 w-[90%] lg:w-[70%] p-3 m-auto mb-5 rounded-lg border-2 border-gray-500 shadow-md" placeholder='Correo electrónico' required/>
          <input type="password" name="password" className="h-10 w-[90%] lg:w-[70%] p-3 m-auto mb-5 rounded-lg border-2 border-gray-500 shadow-md" placeholder='Contraseña' required/>
          <Link to="/RestablecerContrasena" className='lg:w-[70%] m-auto mb-5 text-end text-[var(--blue)] underline'>¿Olvidaste tu contraseña?</Link>
          <button type="submit" className='bg-[var(--green)] w-[200px] m-auto h-10 rounded-lg text-white font-black'>Iniciar sesión</button>
          <div className='w-[70%] flex flex-col items-center lg:flex-row m-auto justify-between mt-10'>
            <span>¿No tienes cuenta?</span>
            <Link to="/Registro" href="#" className='text-[var(--blue)] underline'>Crea una cuenta</Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login