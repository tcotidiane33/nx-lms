import { Header } from '@components/header/header';
import { Outlet, Link } from 'react-router-dom';

export default function MasterLayout() {
  return (
    <div>
      <Header />

      {/* <header style={{ background: '#0070f3', color: '#fff', padding: 16 }}>
        <nav>
          <Link to="/dashboard" style={{ color: '#fff', marginRight: 16 }}>Dashboard</Link>
          <Link to="/profile" style={{ color: '#fff' }}>Profil</Link>
        </nav>
      </header>*/}
      <main style={{ minHeight: '80vh', background: '#f9f9f9' }}>
        <Outlet />
      </main> 

    </div>
  );
}
