import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ChartImg from '../assets/img/amico.png'
import { FormatDate } from '../helpers/FormatDate';
import { stringify } from 'postcss';

const Articulo = () => {
  const [article, setArticle] = useState([]);
  const params = useParams()
  const urlArticle = window.location.href

  useEffect(() => {
    if (params.id) {
      axios.get(`${import.meta.env.VITE_API_URL}/blog/${params.id}`
      )
        .then(resp => {
          setArticle(resp.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])

  const formattedDate = FormatDate(article.createdAt);

  return (
    <>
      <div className='bg-[var(--primary)] flex flex-col'>
        <div className='flex gap-3 text-[var(--secondary)] lg:w-[70%] p-3 max-w-screen-xl mx-8'>
          <Link to="/">Home <FontAwesomeIcon icon={faAngleRight} /></Link>
          <Link to="/Blog">Blog <FontAwesomeIcon icon={faAngleRight} /></Link>
          <Link to="/">{article.title}</Link>
        </div>
        <div className='my-5 max-w-screen-xl lg:w-1/2 lg:mx-auto mx-8'>
          <h1 className='
          text-3xl 
          text-[var(--pink)] 
          font-black 
          p-3
          '>{article.title}
            <span className='text-[var(--secondary)] text-sm font-normal block mt-2'>📅 {formattedDate}</span>
          </h1>
        </div>
        <div className='flex w-[100%] lg:w-[50%] justify-between px-3 my-5 max-w-screen-xl mx-8 lg:mx-auto'>
          <div className='flex gap-3 items-center'>
            <div className='bg-[var(--primary)] w-[30px] h-[30px] rounded-3xl border'></div>
            <div className='flex flex-col text-[var(--secondary)]'>
              <span>Escrito por:</span>
              <span>{article.author}</span>
            </div>
          </div>
          <div className='flex flex-col items-center mx-8'>
            <span className='text-[var(--secondary)]'>Comparte este post:</span>
            <div className='flex gap-3'>
              <a href={`https://web.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlArticle)}`} target="_blank" rel="noopener noreferrer" alt="ícono de facebook">
                <FontAwesomeIcon icon={faSquareFacebook} className="text-[var(--secondary)] h-[30px] fa-2x " />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlArticle)}`} target="_blank" rel="noopener noreferrer" alt="ícono de facebook">
                <FontAwesomeIcon icon={faLinkedin} className="text-[var(--secondary)] h-[30px]  fa-2x " />
              </a>
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Mira este artículo ${urlArticle}`)}`} target="_blank" rel="noopener noreferrer" alt="ícono de facebook">
                <FontAwesomeIcon icon={faSquareWhatsapp} className="text-[var(--secondary)] h-[30px] fa-2x " />
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className='flex flex-col items-center my-10 lg:w-[70%] m-auto max-w-screen-xl'>
        <h3 className='text-2xl font-black text-[var(--pink)]'>Subtítulo del articulo del Blog</h3>
        <p className='px-10 py-5 text-[var(--primary)]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        <p className='px-10 text-[var(--primary)]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>

        <img src={`${import.meta.env.VITE_API_URL}/blog/image/${article.image}`} className="p-10" alt="" />
       <p className='px-10 text-[var(--primary)]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        <Link to="/Blog" className="flex mx-auto mt-10 text-white text-sm font-black bg-[var(--primary)] border-0 py-2 px-7 rounded-full uppercase max-sm:font-black max-sm:text-sm md:text-xl">
          Volver
        </Link>
      </div>
    </>
  )
}

export default Articulo