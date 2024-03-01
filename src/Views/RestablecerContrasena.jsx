import FormRestablecerContrasena from "../components/FormRestablecerContrasena";

const RestablecerContrasena = () => {
    return (
        <>
            <div className="md:grid grid-cols-2 max-w-[80%] items-center justify-center mx-auto my-10">
                <div className="hidden h-[100%] md:flex md:items-center md:justify-center">
                    <h1 className="text-3xl leading-loose text-center w-[80%] text-[var(--primary)]">Aprende en nuestro <b className="text-[var(--pink)]">Blog </b>para emprendedores.</h1>
                </div>
                <div className="flex flex-col w-[90%] mx-auto md:h-[100%]">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl mt-5 text-[var(--pink)]">Restablecer Contraseña</h1>
                        <p className="text-[var(--primary)]">Ingresa tu email y te enviaremos los pasos para elegir una nueva.</p>
                    </div>
                    <FormRestablecerContrasena />
                </div>
            </div>
        </>
    )
}

export default RestablecerContrasena;