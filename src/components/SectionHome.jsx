import { Link } from "react-router-dom";

const SectionHome = () => {
    return (
        <>
            {/* <section className="flex flex-wrap justify-center items-center">
        <div className="p-10 flex flex-col w-[350px] lg:w-[500px] items-center">
        <h3 className="text-center text-[var(--blue)] font-black p-2" >DIÁGNOSTICOs</h3>
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
    </section> */}
            < section >
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div class="sm:w-1/2 mb-10 px-4">
                            <h2 class="title-font text-3xl font-bold text-[#008DDE] mt-6 mb-3 text-center">DIÁGNOSTICO</h2>
                            <div class="text-center w-80 mx-auto">
                                <p class="leading-relaxed text-black text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <button class="flex mx-auto mt-6 text-white text-2xl font-bold bg-[#6EAD15] border-0 py-2 px-7 rounded-full">COMENZAR</button>
                        </div>
                        <div class="sm:w-1/2 mb-10 px-4">
                            <h2 class="title-font text-3xl font-bold text-[#008DDE] mt-6 mb-3">BLOG</h2>
                            <div class="text-center w-80 mx-auto">
                                <p class="leading-relaxed text-black text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            </div>
                            <button class="flex mx-auto mt-6 text-white text-2xl font-bold bg-[#E97D00] border-0 py-2 px-20 rounded-full">IR</button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SectionHome;