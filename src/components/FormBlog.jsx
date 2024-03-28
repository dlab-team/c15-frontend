import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AuthContext from "../context/Context";
import Swal from "sweetalert2";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FormBlog = () => {
    const params = useParams();
    const { userData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState("");


    useEffect(() => {
        if (params.id) {
            axios.get(`${import.meta.env.VITE_API_URL}/blog/${params.id}`)
                .then(resp => {
                    console.log(resp)
                    const { title, content, author, image } = resp.data;
                    setTitle(title);
                    setContent(content);
                    setAuthor(author);
                    setImageURL(image);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', title);
        data.append('content', content);
        data.append('author', author);
        data.append('image', imageFile);
        data.append('user_id', userData.id)

        if (params.id) {
            Swal.fire({
                title: '¿Desea modificar el artículo?',
                text: "Revise bien los datos ingresados",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonColor: '#d33',
                confirmButtonColor: '#3085d6',
                cancelButtonText: 'Volveré a revisar',
                confirmButtonText: 'Sí, modificar',
                reverseButtons: false
            })
                .then(result => {
                    if (result.isConfirmed) {
                        axios.put(`${import.meta.env.VITE_API_URL}/blog/${params.id}`, data, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                            .then(resp => {
                                console.log(resp)
                                Swal.fire(
                                    'Artículo modificado',
                                    'El artículo ha sido modificado satisfactoriamente',
                                    'success'
                                ).then(() => { navigate("/Blog") })
                            })
                            .catch(err => {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: '¡Algo pasó! Ourrió un error al actualizar el artículo 🙁.',
                                });
                            })
                    }
                })
        } else {
            Swal.fire({
                title: '¿Desea agregar el artículo?',
                text: "Revise bien los datos ingresados",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonColor: '#d33',
                confirmButtonColor: '#3085d6',
                cancelButtonText: 'Volveré a revisar',
                confirmButtonText: 'Sí, crear',
                reverseButtons: false
            })
                .then(result => {
                    if (result.isConfirmed) {
                        axios.post(`${import.meta.env.VITE_API_URL}/blog`, data, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                            .then(resp => {
                                console.log(resp)
                                Swal.fire(
                                    'Artículo creado',
                                    'El artículo ha sido creado satisfactoriamente',
                                    'success'
                                ).then(() => { navigate("/Blog") })
                            })
                            .catch(err => {
                                console.log(err)
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: '¡Algo pasó! Ourrió un error al crear el artículo 🙁.',
                                });
                            })
                    }
                })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col my-5 max-w-screen-xl">
            <label className="text-sm pl-2">Autor o Autora</label>
            <input
                type="text"
                name="author"
                className="h-10 mb-3 pl-4 rounded-lg border-2 border-gray-500 shadow-md"
                placeholder="Autor del artículo"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required
            />
            <label className="text-sm pl-2">Título principal</label>
            <input
                type="text"
                name="title"
                className="h-10 mb-3 pl-4 rounded-lg border-2 border-gray-500 shadow-md"
                placeholder="Título principal del artículo"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <label className="text-sm pl-2">Contenido del artículo</label>
            <div className="h-48 pb-11">
                <ReactQuill
                    theme="snow"
                    name="content"
                    value={content}
                    onChange={setContent}
                    style={{ height: "100%" }}
                    placeholder="Escribe el contenido del artículo..."
                />
            </div>
            <label className="text-sm pl-2 mt-3">Archivo</label>
            <input type="file" onChange={e => setImageFile(e.target.files[0])} />
            <p className="mb-5 text-[var(--primary)] text-xs text-red-600 mt-2 pl-2"><b>Por favor, asegúrate de que la imagen seleccionada tenga un tamaño máximo de 1MB.</b></p>
            <div className="mt-2 mb-6 max-w-[50%] mx-auto">
                {imageFile || imageURL ? (
                    <div className="mt-2 mb-6 md:max-w-[70%] mx-auto">
                        <img
                            src={imageFile ? URL.createObjectURL(imageFile) : `${import.meta.env.VITE_API_URL}/blog/image/${imageURL}`}
                            alt="Imagen seleccionada"
                            className="max-w-full h-auto rounded-lg border-2 border-gray-500 shadow-md"
                        />
                    </div>
                ) : null}
            </div>
            <button
                type="submit"
                className="mt-2 bg-[var(--pink)] py-3 px-4 rounded-xl shadow-lg text-white font-medium lg:w-[40%] lg:mx-auto">
                {params.id ? "Modificar blog" : "Publicar blog"}
            </button>
        </form>
    )
}

export default FormBlog;