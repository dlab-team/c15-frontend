import React from 'react'

const CreateRegister = () => {
    return (
      <div class="container px-7 py-4 mx-auto lg:flex flex-flow-row-wrap justify-between">
        <div class="hidden lg:block md:w-1/2 lg:pr-0 pr-0 w-full pt-40 mx-auto mt-12">
          <h1 class="title-font font-medium text-3xl text-black text-center tracking-wide leading-relaxed">¿Cómo convertir tu Pyme en una <span class="text-[#893685] font-bold">Startup?</span>Aprende en nuestro <span class="text-[#893685] font-bold">Blog</span> para Emprendedores</h1>
        </div>
  
        <div class="form mx-auto lg:w-1/2">
          <div class="md:w-full lg:w-2/3 rounded-lg px-8 flex flex-col mt-3 py-8 md:mt-0 mx-auto">
            <h2 class="text-black lg:text-3xl text-2xl font-medium title-font mb-3">Crear Nueva Contraseña</h2>
            <h3 class="text-black text-xl font-medium title-font mb-5">La nueva contraseña debe ser diferente de las anteriores</h3>
            
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-base text-black">Contraseña</label>
              <input type="password" id="full-name" name="full-name" class="lg:w-5/6 w-full bg-white rounded-lg border-2 border-[#757575] text-base outline-none text-gray-700 py-1 px-3 ease-in-out" placeholder="Nueva contraseña">
              <h3 class="text-gray-900 title-font mb-3">Debe tener al menos 8 caracteres</h3>
            </div>
            
            <div class="relative mb-2">
              <label for="email" class="leading-7 text-base text-black">Confirma contraseña</label>
              <input type="password" id="email" name="email" class="lg:w-5/6 w-full bg-white rounded-lg border-2 border-[#757575] text-base outline-none text-gray-700 py-1 px-3 ease-in-out" placeholder="Repite nueva contraseña"/>
            </div>
  
            <button class="lg:flex lg:mx-0 mx-auto mt-20 w-5/6 text-white text-2xl font-bold bg-[#6EAD15] py-2 px-6 rounded-full">Restaurar Contraseña</button>
          </div>
        </div>
      </div>
    )
}

export default CreateRegister