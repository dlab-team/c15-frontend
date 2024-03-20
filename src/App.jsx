import RoutesComponent from './Routes';
import { AuthProvider } from './context/Context';

const App = () => {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  );
};

export default App;
