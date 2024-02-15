import FormRegister from '../components/FormRegister'

const Registro = () => {
  return (
    <>
      <div className="md:grid grid-cols-2">
        <div className="hidden h-[100%] md:flex md:items-center md:justify-center">
          {/* <h1>Emprender ahora es + fácil, realizamos tu registro de empresa en un día, tenemos la mejor oficina virtual Lofwork, administramos tu contabilidad y más.</h1> */}
        <img src="assets\img\texto-register.png" alt="" />
        </div>
        <div className="flex flex-col w-[90%] mx-auto">
          <div className="flex flex-col gap-3">
            <h1 className="text-[var(--primary)] text-4xl mt-5">¡Regístrate en VisorPyme en menos de 1 minuto!</h1>
            <h2>Crea tu cuenta y obtén un diagnóstico de tu empresa gratis, respondiendo un simple cuestionario.</h2>
          </div>
          <FormRegister />
        </div>
      </div>
    </>
  )
}

export default Registro