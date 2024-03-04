import { Link } from 'react-router-dom';

const SectionHome = () => {
  return (
    <section className="flex flex-wrap justify-center items-center">
      <div className="p-10 flex flex-col w-[350px] lg:w-[500px] items-center">
        <h3 className="text-center text-[var(--primary)] text-3xl font-black p-2">
          DIAGNÓSTICO
        </h3>
        <p className="text-center py-5 text-[var(--primary)]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Link
          to="/Diagnostico"
          className="bg-[var(--pink)] w-[200px]  rounded-2xl text-center text-white text-xl font-black p-2"
        >
          COMENZAR
        </Link>
      </div>
      <div className="p-10 flex flex-col w-[350px] lg:w-[500px] items-center">
        <h3 className="text-center text-[var(--primary)] text-3xl font-black p-2">
          BLOG
        </h3>
        <p className="text-center py-5 text-[var(--primary)]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Link
          to="/Blog"
          className="bg-[var(--secondary)] w-[200px]  rounded-2xl text-center text-[var(--pink)] text-xl font-black p-2"
        >
          IR AL BLOG
        </Link>
      </div>
    </section>
  );
};

export default SectionHome;
