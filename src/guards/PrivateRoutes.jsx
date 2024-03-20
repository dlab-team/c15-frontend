import {useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/Context";

const PrivateRoutes = () => {
  const { token } = useContext(AuthContext);

  
  return token ? <Outlet /> : <Navigate replace to={"/Login"}/>;

  
};

export default PrivateRoutes;