import Sidebar from "../components/Sidebar";

const CambiarPassword = () => {

    return (
      <div className="overflow-hidden relative h-[80vh] w-[100%] mb-[-30px] flex justify-center">
        <Sidebar></Sidebar>
          <h1 className="text-3xl text-[var(--primary)] w-[300px] lg:w-[450px] m-auto px-10 text-center">
            Cambiar Password
          </h1>
        <div className="w-[100px] lg:w-[350px] h-[100px] lg:h-[350px] absolute top-[80px] lg:top-[0px] right-[-10px] rounded-full bg-gradient-to-t z-1 from-blue-200 to-indigo-900"></div>
        
        <div className="w-[300px] lg:w-[900px] h-[300px] lg:h-[900px] absolute rounded-full flex mx-auto mt-[50px] lg:mt-[-150px]">
          
        </div>
      </div>
    );
  };
  
  export default CambiarPassword;