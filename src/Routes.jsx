import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Contacto from './Views/Contacto';
import Diagnostico from './Views/Diagnostico';
import Blog from './Views/Blog';

const RoutesComponent = () => {
  return (
    <>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Diagnostico" element={<Diagnostico />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="Contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
