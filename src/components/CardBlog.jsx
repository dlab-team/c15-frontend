import { Link } from 'react-router-dom'
import edit from '../assets/img/Edit.svg'
import trash from '../assets/img/trash.svg'
import { FormatDate } from '../helpers/FormatDate';
import AuthContext from '../context/Context';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const CardBlog = ({ article }) => {
    const { userData } = useContext(AuthContext);
    const { id, title, image, content, author, } = article
    const formattedDate = FormatDate(article.createdAt);

    const deleteArticle = article => {
        Swal.fire({
            title: `¿Deseas eliminar el artículo?`,
            html: `Eliminarás el articulo <b>${article.title}</b>`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: '¡Sí, quiero eliminar!',
            reverseButtons: false
        })
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete(`${import.meta.env.VITE_API_URL}/blog/${article.id}`)
                        .then(resp => {
                            Swal.fire(
                                'Artículo eliminado',
                                `El artículo fue eliminado satisfactoriamente`,
                                'success'
                            ).then(() => { window.location.reload() })
                        }).catch(err => console.log(err))
                }
            })
    }

    return (
        <div key={id} className="border-2 border-[var(--secondary)] w-[95%] mx-auto my-4 shadow-lg h-[92%]">
            <div className="overflow-hidden h-40">
                <img
                    src={`${import.meta.env.VITE_API_URL}/blog/image/${image}`}
                    alt={`${image}`}
                    className="h-full py-2 px-2 object-cover w-full"
                    style={{ objectPosition: "center" }}
                />
            </div>
            <div className="pt-1 pb-3 px-4">
                <h2 className="py-4 font-extrabold uppercase text-[var(--pink)]">{title}</h2>
                <p className="text-sm">{content}</p>
            </div>
            <div className="flex justify-between mx-4 mb-3">
                <div className="text-xs text-gray-500">
                    <p>Autor del artículo: {author}</p>
                    <p>Fecha de publicación: {formattedDate}</p>
                </div>
                {
                    userData?.role_id === 2 &&
                    <div className="flex gap-2">
                        <Link onClick={() => deleteArticle(article)}>
                            <img src={trash} alt="Delete blog" className="w-8 hover:bg-[var(--secondary)] duration-300 p-1 border rounded-md" />
                        </Link>
                        <Link to={`/Administrador/Blog/Editar/${id}`}>
                            <img src={edit} alt="Edit blog" className="w-8 hover:bg-[var(--secondary)] duration-300 p-1 border rounded-md" />
                        </Link>
                    </div>
                }
            </div>
        </div >
    )
}

export default CardBlog;
