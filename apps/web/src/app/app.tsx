import NxWelcome from "./nx-welcome";
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './features/dashboard/Dashboard';
import { AuthProvider } from './lib/context/AuthContext';
import './styles/Custom.css';
import { Home } from './pages/home/Home';
import { LogIn } from './pages/login/Login';
import { SignUp } from './pages/signup/SignUp';
import { Courses } from './pages/courses/Courses';

export default function App() {
  return (

    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
        {/* END: routes */}
    </AuthProvider>

  );
}


