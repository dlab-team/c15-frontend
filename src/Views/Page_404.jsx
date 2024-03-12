import React from 'react'
import Alien from '../assets/img/Error-Alien.png'

const Page_404 = () => {
  return (
    <div className='overflow-hidden relative h-[100vh] mb-[-30px]'>
        <div className='w-[150px] lg:w-[350px] h-[150px] lg:h-[350px] absolute top-[20px] lg:top-[-60px] left-[-75px] lg:left-[-150px] rounded-full bg-gradient-to-t  from-pink-600 to-indigo-900'></div>
        <div className='w-[90px] lg:w-[200px] h-[90px] lg:h-[200px] absolute top-[80px] lg:top-[0px] right-[-50px] rounded-full bg-gradient-to-t from-blue-200 to-indigo-900'></div>
        <div className='w-[150px] h-[150px] absolute top-[500px] lg:top-[550px] lg:left-[100px] left-[-50px] rounded-full bg-gradient-to-t  from-pink-600 to-indigo-900'></div>
        <div className='w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] absolute top-[350px] lg:top-[400px] left-[-150px] lg:left-[-180px] rounded-full bg-gradient-to-t  from-pink-600 to-indigo-900'></div>      
        <div className='w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] absolute top-[400px] right-[-100px] rounded-full bg-gradient-to-t from-blue-200 to-indigo-900'></div>
        
        <div className='pt-10 '>
            <h1 className='text-3xl text-[var(--primary)] w-[250px] lg:w-[500px] mt-10 mx-auto text-center p-5 font-black'>¡ Error 404 : Página perdida no encontrada !</h1>
        </div>
        <div className='w-[100%] flex justify-center mt-[-100px] lg:mt-[-150px]'>
            <img src={Alien} alt="" />
        </div>
    </div>
  )
}

export default Page_404