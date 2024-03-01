const FormRestablecerContrasena = () => {
    return (
        <div>
        <form /*onSubmit={submit}*/ className="flex flex-col my-5">
            <label classNam>Email</label>
            <input
                type="email"
                name="email"
                className="h-10 mb-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md"
                placeholder="Correo electrónico"
                // onChange={handlerChange}
                required
            />
            <button
                type="submit"
                className="mt-2 bg-[var(--pink)] py-3 px-4 rounded-xl shadow-lg text-white font-medium hover:bg-[var(--secondary)] hover:text-[var(--pink)] hover:duration-300 md:w-[50%] md:mx-auto">
                {
                    /*cargando ? "Validando datos..." :*/ "Enviar"
                }
            </button>
        </form>
    </div>
    )
}

export default FormRestablecerContrasena;