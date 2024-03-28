import { useState } from 'react';
import axios from "axios";

const Switch = ({ id, name, active }) => {
  const [isActive, setIsActive] = useState(active);

  const putActivePillar = async (event) => {
    event.preventDefault();
    try {
      const newActiveState = !isActive;
      await axios.put(`${import.meta.env.VITE_API_URL}/pillar/${id}`, {
        name: name,
        active: newActiveState,
      });
      setIsActive(newActiveState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={
        isActive
          ? 'w-10 h-5 bg-[var(--lightblue)] rounded-full flex justify-end cursor-pointer transition-all duration-500 border border-slate-300'
          : 'w-10 h-5 bg-[var(--secondary)] rounded-full flex justify-start cursor-pointer transition-all duration-500 border border-slate-300'
      }
      onClick={putActivePillar}
    >
      <span
        className={
          isActive
            ? 'h-5 w-5 rounded-full bg-white border border-slate-300'
            : 'h-5 w-5 rounded-full bg-white border border-slate-300'
        }
      ></span>
    </div>
  );
};

export default Switch;