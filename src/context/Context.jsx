import { createContext, useState } from 'react';

const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const storeToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const clearToken = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, storeToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
