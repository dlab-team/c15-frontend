// import React from 'react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import Lupa from '../assets/img/Lupa.png'
import Eliminar from '../assets/img/Eliminar.png'
import Rectangle from '../assets/img/Rectangle_8.png'


const Blog = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
   
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    console.log('Búsqueda:', query);
  }; 

  const navigate = useNavigate(); 
  

  return (
    <><><div className='py-8 flex justify-center font-extrabold text-3xl'>BLOG</div>
    
        <div className='mx-24 text-xl text-center font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>

        <div  className='flex justify-center py-12 '>

          <input type="text" placeholder="Escribe algo aquí..." value={searchTerm} onChange={handleSearchChange} className='indent-16 w-[65%] h-[60px] rounded-lg border-1 border-[var(--primary)] ' />
          {searchTerm && (
            <><button onClick={handleClearSearch} className="absolute mt-[3.5%] lg:mt-[14px]  left-[73%] lg:left-[78.5%] text-gray-500 hover:text-gray-700"><img src={Eliminar} alt='' /></button>
            </>
          )}
          <button onClick={handleSearch} className=" mt-[2.5%] lg:mt-[12px] absolute  left-[19%] lg:left-[18.5%] text-gray-500 hover:text-gray-700"><img  src={Lupa} alt='' /></button>
        </div>      
      </>

      <div className='mx-8 lg:mx-24 pb-0 lg:pb-6 flex flex-col lg:flex-row grid justify-items-center lg:flex justify-items-center  gap-16 '>
        
        <div className="card  border-2 border-[var(--secondary)] w-[95%] lg:w-[35%] mx-auto mt-4 mb-4 lg:mt-16 mb-16 ">
          <img src={Rectangle} className='card-image w-[100%] lg:w-[100%] py-2 px-2'/>
          <div className="card-content py-6 px-4">
            <h2 className="card-title py-1 font-extrabold">NOTA 1</h2>
            <p className="card-description text-sm font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum  has been the industry's standard.
            </p>
          </div>
        </div> 

        <div className="card  border-2 border-[var(--secondary)] w-[95%] lg:w-[35%]  mt-4 mb-4 lg:mt-16 mb-16 ">
          <img src={Rectangle} className='card-image  w-[100%] lg:w-[100%] py-2 px-2'/>
          <div className="card-content py-6 px-4">
            <h2 className="card-title py-1 font-extrabold">NOTA 1</h2>
            <p className="card-description text-sm font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum  has been the industry's standard.
            </p>
          </div>
        </div> 

        <div className="card border-2 border-[var(--secondary)] w-[95%] lg:w-[35%]  mt-4 mb-4 lg:mt-16 mb-16 ">
          <img src={Rectangle} className='card-image w-[100%] lg:w-[100%] py-2 px-2'/>
          <div className="card-content py-6 px-4">
            <h2 className="card-title py-1 font-extrabold">NOTA 1</h2>
            <p className="card-description text-sm font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum  has been the industry's standard.
            </p>
          </div>
        </div>   

      </div>

      <div className='flex justify-center pb-1 pt-6 lg:pb-12 pt-1'><button onClick={() => navigate(-1)} className='bg-[var(--orange)] py-2 px-8 font-extrabold text-white text-3xl rounded-full'>VOLVER</button></div>
        
    </>


  )
}

export default Blog