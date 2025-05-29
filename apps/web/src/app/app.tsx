import { AuthProvider } from './lib/context/AuthContext';
import AppRouter from './router/AppRouter';
import './styles/Custom.css';

export default function App() {
  return (
    <AuthProvider>
        {/* START: routes */}
        <AppRouter />
        {/* END: routes */}
    </AuthProvider>
  );
}


