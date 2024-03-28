import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormRegister = () => {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [company_name, setCompany_name] = useState('');
  const [company_type_id, setCompany_type_id] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // `${import.meta.env.VITE_API_URL}/questionnarie`

    const postUser = new Promise((resolve, reject) => {
      axios
        .post(`${import.meta.env.VITE_API_URL}/users`, {
          first_name,
          last_name,
          email,
          company_name,
          company_type_id,
          phone,
          password,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data.message);
        });
    });

    postUser
      .then((message) => {
        Swal.fire('¡Se te enviará un correo electrónico para activar tu cuenta!', message, 'success');
      })
      .catch((errorMessage) => {
        Swal.fire('Error, vuelve a intentarlo', errorMessage, 'error');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col my-5">
        <input
          type="text"
          name="nombre"
          className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
          placeholder="Nombre"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
          // onChange={handlerChange}
          required
        />
        <input
          type="text"
          name="apellidos"
          className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
          placeholder="Apellidos"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          // onChange={handlerChange}
          required
        />
        <input
          type="email"
          name="email"
          className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // onChange={handlerChange}
          required
        />
        <input
          type="text"
          name="empresa"
          className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
          placeholder="Nombre emprendimiento / PYME"
          value={company_name}
          onChange={(e) => setCompany_name(e.target.value)}
          // onChange={handlerChange}
          required
        />
        <select
          className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
          name="tipo empresa"
          value={company_type_id}
          onChange={(e) => setCompany_type_id(e.target.value)}
        >
          <option value="" hidden>
            Seleccione el tipo de empresa
          </option>
          <option value="1">Pyme</option>
          <option value="2">Empresa</option>
          <option value="3">Otro</option>
        </select>
        <div className="flex items-center my-2 gap-2">
          <input
            type="text"
            value="+56"
            className="h-10 w-14 bg-gray-500 rounded-lg border-gray-300 text-center text-white shadow-md"
            readOnly
          />
          <input
            type="tel"
            name="numero_telefono"
            className="flex-grow h-10 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
            placeholder="Ingresa tu número"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            // onChange={handlerChange}
            required
          />
        </div>
        <label className="mt-5">Contraseña</label>
        <input
          type="password"
          name="clave"
          className="h-10 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
          placeholder="Ingresa contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // onChange={handlerChange}
          required
        />
        <label className="mb-5 text-[var(--primary)]">
          Debe tener al menos 8 caracteres
        </label>

        <label className="text-center mt-2 text-[var(--primary)]">
          Al registrarme acepto los <b>términos y condiciones</b>
        </label>
        <button
          type="submit"
          className="mt-2 bg-[var(--pink)] py-3 px-4 rounded-xl shadow-lg text-white font-medium hover:bg-[var(--secondary)] hover:text-[var(--pink)] hover:duration-300  md:w-[50%] md:mx-auto"
        >
          {/*cargando ? "Validando datos..." :*/ 'Registrarme'}
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
