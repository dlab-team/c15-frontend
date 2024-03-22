

const PerfilAdministrador = () => {
  return (
    <div className='overflow-hidden relative h-[100vh] w-[100%] mb-[-30px] flex justify-center'>
        <div className='w-[200px] lg:w-[600px] h-[200px] lg:h-[600px] absolute top-[-50px] lg:top-[-60px] left-[-50px] lg:left-[-150px] rounded-full z-1 bg-gradient-to-t  from-pink-600 to-indigo-900'></div>
        <div className='w-[100px] lg:w-[400px] h-[100px] lg:h-[400px] absolute top-[80px] lg:top-[0px] right-[-10px] rounded-full bg-gradient-to-t z-1 from-blue-200 to-indigo-900'></div>
        <div className='w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] absolute top-[350px] lg:top-[400px] left-[-50px] lg:left-[-180px] rounded-full bg-gradient-to-t  from-pink-600 to-indigo-900'></div>      
        <div className='w-[350px] lg:w-[400px] h-[350px] lg:h-[400px] absolute top-[250px] right-[-180px] rounded-full bg-gradient-to-t from-blue-200 to-indigo-900'></div>
        <div className='w-[300px] lg:w-[900px] h-[300px] lg:h-[900px] border-2 absolute rounded-full flex mx-auto mt-[50px] lg:mt-[-150px]'>
            <h1 className='text-3xl text-[var(--primary)] w-[300px] lg:w-[400px] m-auto px-10 text-center'>Bienvenido al panel de <b>Administrador</b></h1>
        </div>
    </div>
  )
}

export default PerfilAdministrador