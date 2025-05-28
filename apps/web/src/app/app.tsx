import NxWelcome from "./nx-welcome";
import { Routes, Route, Link } from 'react-router-dom';
import LoginRegister from './features/auth/LoginRegister';
import Dashboard from './features/dashboard/Dashboard';
import { AuthProvider } from './lib/context/AuthContext';
import './styles/Custom.css';
import { Home } from "./pages/home/Home";



export default function App() {
  return (

    <AuthProvider>
      {/* <NxWelcome title="@lmsrepo/web" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      {/* <div role="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page-2">Page 2</Link></li>
        </ul>
      </div> */}
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
       
        {/* END: routes */}
    </AuthProvider>

  );
}


