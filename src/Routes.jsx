import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AdminHeader from './components/AdminHeader';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Blog from './Views/Blog';
import AdminBlog from './Views/Admin/AdminBlog';
import Login from './Views/Login';
import Registro from './Views/Registro';
import RestablecerContrasena from './Views/RestablecerContrasena';
import Articulo from './Views/Articulo';
import Page_404 from './Views/Page_404';
import Diagnostico from './Views/Diagnostico';
import Resultado from './Views/Resultado';
import Perfil from './Views/Perfil/Perfil'
import PrivateRoutes from './guards/PrivateRoutes';
import AdminRoutes from './guards/AdminRoutes';
import PublicRoutes from './guards/PublicRoutes';
import PerfilAdministrador from './Views/PerfilAdministrador';
import Pilares from './Views/Admin/Pilares';
import CrearPregunta from './Views/Admin/CrearPregunta';
import PreguntaAdmin from './Views/Admin/PreguntaAdmin';
import VistaFormBlog from './Views/Admin/VistaFormBlog';
import AdminResultados from './Views/Admin/AdminResultados';
import AdminUsuarios from './Views/Admin/AdminUsuarios';
import AdminDiagnostico from './Views/Admin/AdminDiagnostico';

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        {/* Rutas públicas */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <PublicRoutes />
              <Footer />
            </>
          }
        >
        <Route path="/" element={<HomePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/RestablecerContrasena" element={<RestablecerContrasena />} />
        <Route path="/Articulo/:id" element={<Articulo />} />
        <Route path="*" element={<Page_404 />} />
        </Route>
        {/* Rutas privadas */}
        <Route
          element={
            <>
              <Header />
              <PrivateRoutes />
              <Footer />
            </>
          }
        >
          <Route path="/Diagnostico" element={<Diagnostico />} />
          <Route path="/Resultado" element={<Resultado />} />
          <Route path="/Perfil/*" element={<Perfil />} />
        </Route>
        {/* Rutas de Admin */}
        <Route
          element={
            <>
              <AdminHeader />
              <AdminRoutes />
              <Footer />
            </>
          }
        >
          <Route path="/Admin" element={<PerfilAdministrador />} />
          <Route path="/Admin/Pilares" element={<Pilares />} />
          <Route path="/Admin/NuevaPregunta" element={<CrearPregunta />} />
          <Route path="/Admin/PreguntaAdmin" element={<PreguntaAdmin />} />
          <Route path="/Admin/Blog" element={<AdminBlog />} />
          <Route path="/Admin/Blog/Editar/:id" element={<VistaFormBlog />} />
          <Route path="/Admin/Blog/Crear" element={<VistaFormBlog />} />
          <Route path="/Admin/Resultados" element={<AdminResultados />} />
          <Route path="/Admin/Usuarios" element={<AdminUsuarios />} />
          <Route path="/Admin/Diagnostico" element={<AdminDiagnostico />} />
          
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponent;
