import {useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/Context";

const AdminRoutes = () => {
  const { userData } = useContext(AuthContext);

  
  return userData && userData.role_id === 2 ? <Outlet /> : <Navigate replace to={"/Login"}/>;

  
};

export default AdminRoutes;