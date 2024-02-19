import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Diagnostico from './Views/Diagnostico';
import Blog from './Views/Blog';
import Login from './Views/Login';
import Registro from './Views/Registro';
import Resultado from './Views/Resultado';
import RestablecerContrasena from './Views/RestablecerContrasena';
import Footer from './components/Footer';

const RoutesComponent = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Diagnostico" element={<Diagnostico />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Resultado" element={<Resultado />} />
        <Route path="/RestablecerContrasena" element={<RestablecerContrasena />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default RoutesComponent;
