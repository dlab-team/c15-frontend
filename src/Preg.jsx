
import './App.css'
import Inputs from './components.jsx'


function Pregunta(){ 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('formulario enviado con exito');    
  };

  return ( <div>
    <form id="miForm" action="/enviar" method="post" onSubmit={handleSubmit} className="ml-16 pr-4 pt-6">    
      <h2 className="pr-4 pt-6 font-bold">1. ¿Lorem Ipsum is simply dummy text of the printing and typestting industry?</h2>
      <div className='mt-14 mb-36'>
        <Inputs/>
        <Inputs/>
        <Inputs/>
        <Inputs/>
        <Inputs/>
      </div> 
       
    <h2 className="pr-4 pt-6 font-bold">2. ¿Lorem Ipsum is simply dummy text of the printing and typestting industry?</h2>
    <div className='mt-14 mb-36'>
        <Inputs/>
        <Inputs/>
        <Inputs/>
        <Inputs/>
        <Inputs/>
      </div>
     
    <h2 className="pr-4 pt-6 font-bold">3. ¿Lorem Ipsum is simply dummy text of the printing and typestting industry?</h2>
      <div className='mt-14 mb-36'>
        <Inputs/>
        <Inputs/>
        <Inputs/>
        <Inputs/>
        <Inputs/>
      </div>   

    </form>
    <div className='flex justify-center'>
      <button type="submit" form="miForm"className='bg-green-500 mt-40 mb-16 rounded-2xl py-3 px-10 text-2xl font-bold text-white' >Enviar</button>
    </div>
  </div>)      

};

export default Pregunta;
