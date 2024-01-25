import React from "react";
import Banner from "../assets/img/banner.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <section>
        <img
          src={Banner}
          alt="Mujer usando una computadora"
          className="w-[90%] lg:w-[60%] h-[40vh]  mx-auto mt-[60px] rounded-3xl"
        />
      </section>
      <section className="p-[60px]">
        <h2 className="text-[var(--primary)] py-2 font-roboto font-black text-lg">
          ¿QUÉ ES?
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <section className="p-[60px] bg-[var(--primary)]">
        <h2 className="text-[var(--orange)] py-2 font-roboto font-black text-lg text-end">
          ¿CÓMO FUNCIONA?
        </h2>
        <p className="text-end text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <section className="p-[60px]">
        <h2 className="text-[var(--primary)] py-2 font-roboto font-black text-lg">
          ¿BENEFICIOS?
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <section className="flex flex-wrap justify-center items-center">
        <div className="p-10 flex flex-col w-[350px] lg:w-[500px] items-center">
          <h3 className="text-center text-[var(--blue)] font-black p-2" >DIÁGNOSTICO</h3>
          <p className="text-center py-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Link to='/Diagnostico' className="bg-[var(--green)] w-[200px]  rounded-2xl text-center text-white font-black p-2">COMENZAR</Link>
        </div>
        <div className="p-10 flex flex-col w-[350px] lg:w-[500px] items-center">
          <h3 className="text-center text-[var(--blue)] font-black p-2">BLOG</h3>
          <p className="text-center py-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Link to='/Blog' className="bg-[var(--orange)] w-[200px]  rounded-2xl text-center text-white font-black p-2">IR</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
