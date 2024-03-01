import React from 'react'

const FormRegister = () => {
    return (
        <div>
            <form /*onSubmit={submit}*/ className="flex flex-col my-5">
                <input
                    type="text"
                    name="nombre"
                    className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
                    placeholder="Nombre"
                    // onChange={handlerChange}
                    required
                />
                <input
                    type="text"
                    name="apellidos"
                    className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
                    placeholder="Apellidos"
                    // onChange={handlerChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
                    placeholder="Correo electrónico"
                    // onChange={handlerChange}
                    required
                />
                <input
                    type="text"
                    name="empresa"
                    className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
                    placeholder="Nombre emprendimiento / PYME"
                    // onChange={handlerChange}
                    required
                />
                <select
                    className="h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
                    name=""
                >
                    <option value="" hidden>Seleccione el tipo de empresa</option>
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
                    // onChange={handlerChange}
                    required
                />
                <label className="mb-5 text-[var(--primary)]">Debe tener al menos 8 caracteres</label>

                <label className="text-center mt-2 text-[var(--primary)]">Al registrarme acepto los <b>términos y condiciones</b></label>
                <button
                    type="submit"
                    className="mt-2 bg-[var(--pink)] py-3 px-4 rounded-xl shadow-lg text-white font-medium hover:bg-[var(--secondary)] hover:text-[var(--pink)] hover:duration-300  md:w-[50%] md:mx-auto">
                    {
                        /*cargando ? "Validando datos..." :*/ "Registrarme"
                    }
                </button>
            </form>
        </div>
    )
}

export default FormRegister