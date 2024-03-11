import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../context/Context';

const Login = () => {
  const [user, setUser] = useState({});
  const { storeToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUser = (event) => setUser({ ...user, [event.target.name]: event.target.value });

  const handleForm = async (event) => {
    event.preventDefault();

    if (!user.email.trim() || !user.password.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'El correo electrónico y la contraseña son obligatorios.',
      });
      return;
    }
    const endpoint = "/auth/login";

    try {
      const { data } = await axios.post(import.meta.env.VITE_API_URL + endpoint, user);
      window.localStorage.setItem('token', data.token);
      storeToken(data.token);
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Usuario identificado con éxito 😀.',
      });
      setUser({ data });
      navigate('/');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error en la identificación del usuario 🙁.',
      });
    }
  };

  return (
    <main className='flex container'>
      <div className='w-[50%] hidden lg:flex lg:justify-center lg:items-center'>
        <p className='text-3xl leading-loose text-[var(--primary)] w-[60%] text-center'>Contesta nuestro cuestionario para entregarte un <span className='text-[var(--pink)]'>diagnóstico de tu emprendimiento</span>, de manera gratuita </p>
      </div>
      <div className='lg:w-[50%] p-10 w-[100%] flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-[var(--pink)] pt-[60px] pb-10 lg:p-10'>Iniciar sesión</h1>
        <form className='flex flex-col w-[100%]' onSubmit={handleForm}>
          <input type="email" name="email" className="h-10 w-[90%] lg:w-[70%] p-3 m-auto mb-5 rounded-lg border-2 border-gray-500 shadow-md" placeholder='Correo electrónico' required onChange={handleUser} />
          <input type="password" name="password" className="h-10 w-[90%] lg:w-[70%] p-3 m-auto mb-5 rounded-lg border-2 border-gray-500 shadow-md" placeholder='Contraseña' required onChange={handleUser} />
          <Link to="/RestablecerContrasena" className='lg:w-[70%] m-auto mb-5 text-end text-[var(--primary)] underline'>¿Olvidaste tu contraseña?</Link>
          <button type="submit" className='bg-[var(--pink)] w-[200px] m-auto h-10 rounded-lg text-white font-black'>Iniciar sesión</button>
          <div className='w-[70%] flex flex-col items-center lg:flex-row m-auto justify-between mt-10'>
            <span className='text-[var(--primary)]'>¿No tienes cuenta?</span>
            <Link to="/Registro" href="#" className='text-[var(--lightblue)] underline'>Crea una cuenta</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
