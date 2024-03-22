import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Blog from './Views/Blog';
import Login from './Views/Login';
import Registro from './Views/Registro';
import RestablecerContrasena from './Views/RestablecerContrasena';
import Articulo from './Views/Articulo';
import Page_404 from './Views/Page_404';
import Diagnostico from './Views/Diagnostico'
import Resultado from './Views/Resultado';
import PrivateRoutes from './guards/PrivateRoutes';
import AdminRoutes from './guards/AdminRoutes';
import PerfilAdministrador from './Views/PerfilAdministrador';
import VistaFormBlog from './Views/VistaFormBlog';

const RoutesComponent = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/RestablecerContrasena" element={<RestablecerContrasena />} />
        <Route path="/Articulo/:id" element={<Articulo />} />
        <Route path="*" element={<Page_404 />}></Route>
        <Route element={<PrivateRoutes/>}>
          <Route path="/Diagnostico" element={<Diagnostico />} />
          <Route path="/Resultado" element={<Resultado />} />
        </Route>
        <Route element={<AdminRoutes/>}>
          <Route path="/Administrador" element={<PerfilAdministrador />} />
          <Route path="/Administrador/Blog/Editar/:id" element={<VistaFormBlog />} />
          <Route path="/Administrador/Blog/Crear" element={<VistaFormBlog />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesComponent;
