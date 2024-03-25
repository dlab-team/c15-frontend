import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Lupa from '../assets/img/Lupa.png'
import Eliminar from '../assets/img/Eliminar.png'
import axios from 'axios';
import CardBlog from '../components/CardBlog';
import AuthContext from '../context/Context';

const Blog = () => {
  const { userData } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([])
  const [result, setResult] = useState([])
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/blog`)
      .then(resp => {
        setBlogs(resp.data)
        console.log(resp.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setResult(
      blogs.filter((b) =>
        JSON.stringify(b).toLocaleLowerCase().includes(filterValue)
      )
    );
  }, [blogs, filterValue]);

  const handleFilter = e => {
    const filterValue = e.target.value.toLocaleLowerCase();
    setFilterValue(filterValue);
    setResult(
      blogs.filter(b => JSON.stringify(b).toLocaleLowerCase().includes(filterValue))
    );
  };

  const handleClearFilter = () => {
    setResult(blogs);
    document.getElementById('filterInput').value = '';
  };
  return (
    <>
      <div className='py-8 grid grid-cols-12'>
        <h1 className="font-extrabold text-3xl text-[var(--pink)] text-center col-start-6 col-span-2 py-2">
          BLOG
        </h1>
        {
          userData?.role_id === 2 &&
          <Link
            to="/Administrador/Blog/Crear"
            className="bg-[var(--primary)] rounded-xl shadow-lg text-white font-medium lg:w-[100%] content-center text-center col-start-9 col-span-4 lg:col-start-10 lg:col-span-2">
            + Crear artículo
          </Link>
        }
      </div>
      <div className='mx-24 text-xl text-center font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
      <div className='flex justify-center mt-6 mb-4'>
        <input
          type="text"
          id="filterInput"
          placeholder="Escribe algo aquí..."
          onChange={handleFilter}
          className='indent-16 w-[65%] h-[60px] rounded-lg border-1 border-[var(--primary)]'
        />
        {
          filterValue && (
            <button
              onClick={handleClearFilter}
              className='absolute mt-[3.5%] lg:mt-[14px]  left-[73%] lg:left-[78.5%] text-gray-500 hover:text-gray-700 '
            >
              <img src={Eliminar} alt='' />
            </button>
          )
        }
        <button
          className="mt-[2.5%] lg:mt-[12px] absolute  left-[19%] lg:left-[18.5%] text-gray-500 hover:text-gray-700">
          <img src={Lupa} alt='Lupa para el buscador' />
        </button>
      </div>
      <div className="max-w-screen-xl flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
        {
          result.length === 0 ? (<p className=" col-span-4 text-center font-bold p-4">No se encontraron blogs</p>) :
            result && result.map(article => (
              <Link className="hover:bg-[var(--muybajo)] duration-700" key={article.id} to={`../Articulo/${article.id}`}>
                <CardBlog article={article} />
              </Link>
            ))
        }
      </div>
      <div className='flex justify-center pb-1 pt-6 lg:pt-12 lg:pb-10'>
        <NavLink
          to="/"
          className="flex mx-auto text-white text-sm font-black bg-[var(--primary)] border-0 py-2 px-7 rounded-full uppercase max-sm:font-black max-sm:text-sm md:text-xl">
          Volver
        </NavLink>
      </div>
    </>
  )
}

export default Blog;