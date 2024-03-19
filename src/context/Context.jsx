import { createContext, useState } from 'react';

const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')))

  const storeUser = (addData) =>{
    setUserData(addData)
    window.localStorage.setItem('userData', JSON.stringify(addData))
  }

  const storeToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const clearToken = () => {
    setToken(null);
    setUserData(null)
    localStorage.removeItem('token');
    localStorage.removeItem('userData')
  };

  return (
    <AuthContext.Provider value={{ token, storeToken, clearToken, userData,storeUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
