import React from "react";
import Banner from "../assets/img/banner.png";

import Footer from "../components/Footer";
import SectionHome from "../components/SectionHome";

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
      <SectionHome />
      <Footer />
    </div>
  );
}

export default HomePage;