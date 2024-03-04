import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareFacebook, faLinkedin, faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ChartImg from '../assets/img/amico.png'

const Articulo = () => {

    const [article, setArticle] = useState([]);
    const {id} = useParams()
    const url = `http://localhost:3000/blog/${id}`;
    const urlArticle = window.location.href
    
    /*const getData = async () => {
        try {
          const response = await axios.get(url);
          const data = response.data;
          setArticle(data);
          console.log(article.User.first_name)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);*/

  return (
    <div>
        <div className='bg-[var(--secondary)] flex flex-col items-center w-[100%]'>
            <div className='flex gap-3 text-[var(--primary)] w-[100%] lg:w-[70%] p-3'>
                <Link to="/">Home <FontAwesomeIcon icon={faAngleRight} /></Link>
                <Link to="/Blog">Blog <FontAwesomeIcon icon={faAngleRight} /></Link>
                <Link to="/">{/* {article.title} */} Titulo de prueba</Link>
                </div>
            <div className='my-5'>
                <h1 className='text-3xl text-[var(--primary)] font-black p-3 text-center'>{/* {article.title} */}Titulo de prueba</h1>
                <span className='text-[var(--primary)] p-3'>📅 22-03-2023</span>
            </div>
            <div className='flex w-[100%] lg:w-[50%] justify-between items-center px-3 my-5'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-[var(--primary)] w-[30px] h-[30px] rounded-3xl'></div>
                    <div className='flex flex-col'>
                        <span>Escrito por:</span>
                        <span>{/*{article.User && article.User.first_name} {article.User && article.User.last_name}*/} Juanito Perez</span>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                <span className='text-[var(--primary)]'>Comparte este post:</span>
                <div className='flex gap-3'>
                        <a href={`https://web.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlArticle)}`} target="_blank" rel="noopener noreferrer" alt="ícono de facebook">
                        <FontAwesomeIcon icon={faSquareFacebook} className="text-[var(--primary)] h-[30px] fa-2x "/>
                        </a>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlArticle)}`} target="_blank" rel="noopener noreferrer" alt="ícono de facebook">
                        <FontAwesomeIcon icon={faLinkedin} className="text-[var(--primary)] h-[30px]  fa-2x "/>
                        </a>
                        <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Mira este artículo ${urlArticle}`)}`} target="_blank" rel="noopener noreferrer" alt="ícono de facebook">
                        <FontAwesomeIcon icon={faSquareWhatsapp} className="text-[var(--primary)] h-[30px] fa-2x "/>
                        </a>
                </div>
                </div>
                
            </div>
        </div>
        <div className='flex flex-col items-center my-10 lg:w-[70%] m-auto'>
            <h3 className='text-2xl font-black text-[var(--pink)]'>Subtitulo de prueba</h3>
            <p className='px-10 py-5 text-[var(--primary)]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <img src={ChartImg} className="p-10" alt="" />
            <h3 className='text-2xl font-black text-[var(--pink)]'>Subtitulo de prueba</h3>
            <p className='px-10 py-5 text-[var(--primary)]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <Link to="/Blog" className='bg-[var(--pink)] w-[100px] text-center p-2 rounded-3xl font-black text-white'>Volver</Link>
        </div>
    </div>
  )
}

export default Articulo