import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../context/Context"
import Swal from 'sweetalert2';

const CambiarPassword = () => {
    const { userData } = useContext(AuthContext);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("")

    const putPassword = async (event) => {
      event.preventDefault();
      try {
        const token = window.localStorage.getItem('token');
        if (newPassword === checkPassword) {
          const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/users/${userData.id}/password`, 
            { "old_password": oldPassword, "new_password": newPassword }, 
            { headers: { Authorization: `${token}` } }
          );
          setCheckPassword("");
          setNewPassword("");
          setOldPassword("");
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Contraseña modificada exitosamente 😀.',
          });
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden',
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: error,
        });
      }
    };
    return (
      <div className="overflow-hidden relative h-[80vh] w-[100%] flex flex-col items-center">
          <h1 className="text-3xl text-[var(--primary)] w-[300px] lg:w-[450px] mt-10 px-10 text-center">
            Cambiar Password
          </h1>
      <form onSubmit={putPassword} className="flex flex-col w-[60%]">
          <label className="mt-5">Contraseña actual</label>
          <input
          type="password"
          name="password"
          className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
          placeholder="Contraseña actual"
          value={oldPassword}
          required
          onChange={(e) => {setOldPassword(e.target.value)}}
        />
        <label className="mt-5">Nueva contraseña</label>
        <input
          type="password"
          name="password"
          className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
          placeholder="Nueva contraseña"
          value={newPassword}
          onChange={(e) => {setNewPassword(e.target.value)}}
          required
        />
        <label className="mt-5">Confirme nueva contraseña</label>
        <input
          type="password"
          name="password"
          className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
          placeholder="Confirme contraseña"
          value={checkPassword}
          onChange={(e) => {setCheckPassword(e.target.value)}}
          required
        />
        <button
          type="submit"
          className="mt-10 bg-[var(--pink)] py-3 px-4 rounded-xl shadow-lg text-white font-medium hover:bg-[var(--secondary)] hover:text-[var(--pink)] hover:duration-300  md:w-[50%] md:mx-auto"
        >
          Cambiar contraseña
        </button>
      </form>
        <div className='w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] absolute top-[350px] lg:bottom-[100px] right-[-50px] lg:right-[-100px] rounded-full bg-gradient-to-t  from-pink-600 to-indigo-900'></div>
      </div>
    );
  };
  
  export default CambiarPassword;