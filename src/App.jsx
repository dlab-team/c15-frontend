import {Route, Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Diagnostico from './Views/Diagnostico'
import Home from './Views/Home'
import Blog from './Views/Blog'
import Contacto from './Views/Contacto'

function App() {

  return (
    <>
      <Header> </Header>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/Diagnostico' element={<Diagnostico/>} ></Route>
        <Route path='/Blog' element={<Blog/>} ></Route>
        <Route path='Contacto' element={<Contacto/>} ></Route>
      </Routes>
    </>
  )
}

export default App
