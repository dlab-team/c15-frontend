import { useParams } from "react-router-dom";
import FormBlog from "../components/FormBlog";

const EditarBlog = () => {
    const params = useParams();
    return (
        <>
            <h1 className="my-5 flex justify-center font-extrabold text-3xl text-[var(--pink)]">{params.id ? "Editar blog" : "Crear un blog"}</h1>
            <div className="max-w-4xl mx-5  lg:mx-auto">
                <FormBlog />
            </div>
        </>
    )
}

export default EditarBlog;
