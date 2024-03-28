import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const ActivarCuenta = () => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const urlParams = queryString.parse(window.location.search);
    const token = urlParams.token;

    const config = {
      headers: {
        'Authorization': `${token}`
      }
    };

    axios.put(import.meta.env.VITE_API_URL +'/auth/activation', {}, config)
      .then(response => {
        console.log('Activación exitosa:', response.data);
      })
      .catch(error => {
        console.error('Error al activar la cuenta:', error);
        if (error.response && error.response.status === 401 && error.response.data.message === 'invalidToken') {
          setErrorMessage('El token proporcionado no es válido.');
        } else {
          setErrorMessage('Ocurrió un error al activar la cuenta. Por favor, inténtelo de nuevo más tarde.');
        }
      });
  }, []);

  return (
    <main>
      {errorMessage ? null : (
        <>
          <div className='lg:flex lg:justify-center'>
            <p className='border border-[var(--pink)] rounded-lg shadow-xl text-3xl leading-loose text-[var(--primary)] mt-20 mr-20 ml-20 mb-8 p-6 text-center'>
              Felicidades! Su cuenta <span className='text-[var(--pink)]'>se activó con éxito.</span> Haz click <Link to="/login" className="font-bold text-[var(--pink)]">AQUI</Link> para ingresar con tu correo y contraseña. 
            </p>      
          </div>
          <div className='flex justify-center'>
            <FontAwesomeIcon icon={faCheckCircle} className="text-[var(--pink)] text-8xl" />
          </div>
        </>
      )}
      {errorMessage && (
        <div className="text-red-500 text-center mt-4">
            <p className='border border-[var(--red)] rounded-lg shadow-xl text-3xl leading-loose text-red-500 mt-20 mr-20 ml-20 mb-8 p-6 text-center'>
          {errorMessage}</p>
          <div className='flex justify-center'>
            <FontAwesomeIcon icon={faCircleExclamation} className="text-[var(--red)] text-8xl" />
          </div>
        </div>
      )}
    </main>
  );
};

export default ActivarCuenta;
