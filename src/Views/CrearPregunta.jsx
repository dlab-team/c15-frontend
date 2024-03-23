import { useState, useEffect, useContext } from "react";
import axios from "axios";
import OptionsValues from "../components/OptionsValues";
import AuthContext from "../context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const CrearPregunta = () => {
    const [pillars, setPillars] = useState([]);
    const [pillar, setPillar] = useState("")
    const [optionCount, setOptionCount] = useState(2)
    const {option, value, setOption} = useContext(AuthContext)
    const [arrOptions, setArrOptions] = useState([]);
    const [question, setQuestion] = useState("")

    
    const getPillars = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_URL + "/pillar");
            const data = response.data;
            setPillars(Object.values(data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPillars();
    }, []);
    
    const OptionCount = (e) => {
        setOptionCount(parseInt(e.target.value))
    };
    
    const agregarOpcion = () => {
        if(arrOptions.length < optionCount){
            const indexOption = arrOptions.length + 1
            setArrOptions(opciones => [...opciones, {"order": indexOption,"answer": option, "score": value}])
            setOption('')
        }else{
            alert(`Solo se pueden agregar ${optionCount} opciones`)
        }
        
    }

    const eliminarOpcion = (index) => {
        const newArrOptions = [...arrOptions];
        newArrOptions.splice(index, 1);
        setArrOptions(newArrOptions);
    };
    
    const postQuestion = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + "/question/create", {"question": question, "pillar_id": pillar});
            const questionID = response.data.id;
            setPillar("")
            setQuestion("")
            postOptions(questionID)
        } catch (error) {
            console.log('Error al enviar la pregunta:', error);
        }
    }

    const postOptions = async (questionID) => {
        try {
            const newArray = arrOptions.map(option => ({
                ...option, question_id: questionID
            }))
            const response = await axios.post(import.meta.env.VITE_API_URL + "/option", newArray);
            console.log("datos enviados correctamente")
            setArrOptions([])
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="flex flex-col w-[100%] items-center pt-3">
            <h1 className="text-2xl text-[var(--primary)] p-5">Crear Nueva Pregunta</h1>
            <form className="flex flex-col items-center w-[100%] lg:w-[60%]">
                <select className="text-[var(--pink)] font-black w-[80%] h-10 my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md" value={pillar} onChange={(e) => {setPillar(e.target.value)}}>
                    <option className="text-[var(--pink)]">Selecciona un Pilar</option>
                    {pillars.map(pillar => (
                        <option className="text-[var(--pink)]" key={pillar.id} value={pillar.id}>{pillar.name}</option>
                    ))}
                </select>
                <textarea name="Pregunta" placeholder="Escribe tu pregunta" className="w-[80%] my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md" value={question} onChange={(e) => {setQuestion(e.target.value)}}></textarea>
                <label className="w-[80%] text-center text-2xl text-[var(--primary)]">Ingresa las opciones</label>
                <div className="flex w-[80%] gap-2 my-2 justify-center items-center">
                    <label className="text-center text-xl text-[var(--primary)]"> Número de opciones</label>
                    <select value={optionCount} onChange={OptionCount} className="h-10 pl-2 rounded-lg border-2 border-gray-500 shadow-md">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                </select>
                </div>
                <div className="flex w-[80%] gap-2 my-2 justify-center items-center">
                    <input type="text" value={option}  className="w-[90%] my-2 pl-2 rounded-lg border-2 border-gray-500 shadow-md" placeholder="Escribe el valor de la opción" onChange={(e) => setOption(e.target.value)}/>
                    <OptionsValues optionCount={optionCount}/>
                    <button className="bg-[var(--pink)] p-3 rounded-3xl shadow-lg text-white font-medium hover:bg-[var(--secondary)] hover:text-[var(--pink)] hover:duration-300" onClick={(e) => {e.preventDefault(); agregarOpcion();}}>Agregar</button>
                </div>
                {   
                    arrOptions.map((element, index) => (
                        <div className="flex w-[80%] gap-2 my-2 justify-center items-center" key={index}>
                            <span className="w-[10%]">{element.order}</span>
                            <span className="w-[70%]">{element.answer}</span>
                            <span className="w-[10%] text-center">{element.score}</span>
                            <span className="w-[10%] text-center"><FontAwesomeIcon icon={faTrashCan} onClick={() => eliminarOpcion(index)}/></span>
                        </div>
                    ))
                }
                <button type="submit" className="mt-5 bg-[var(--pink)] py-3 px-10 rounded-3xl shadow-lg text-white font-medium hover:bg-[var(--secondary)] hover:text-[var(--pink)] hover:duration-300  md:w-[40%] md:mx-auto" onClick={postQuestion}>Guardar</button>
            </form>
        </div>
    );
};

export default CrearPregunta;
