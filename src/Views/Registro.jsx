import FormRegister from '../components/FormRegister'
import { API_URL } from '../../env';

const Registro = () => {
  return (
    <>
      <div className="md:grid grid-cols-2 max-w-[80%] items-center justify-center mx-auto">
        <div className="hidden h-[100%] md:flex md:items-center md:justify-center">
          <h1 className="text-3xl text-[var(--primary)] leading-loose w-[60%] text-center">Emprender ahora es + fácil, realizamos tu registro de empresa en un día, <b className="text-[var(--pink)]">tenemos la mejor oficina virtual Lofwork, </b>administramos tu contabilidad y más.</h1>
        </div>
        <div className="flex flex-col w-[90%] mx-auto">
          <div className="flex flex-col gap-3">
            <h1 className="text-[var(--pink)] text-4xl mt-5">¡Regístrate en VisorPyme en menos de 1 minuto!</h1>
            <h2 className='text-[var(--primary)] text-2xl'>Crea tu cuenta y obtén un diagnóstico de tu empresa gratis, respondiendo un simple cuestionario.</h2>
          </div>
          <FormRegister />
        </div>
      </div>
    </>
  )
}

export default Registro