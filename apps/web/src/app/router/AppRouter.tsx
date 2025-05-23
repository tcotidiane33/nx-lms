import { Routes, Route } from 'react-router-dom';
import LoginRegister from '../features/auth/LoginRegister';
import Dashboard from '../features/dashboard/Dashboard';
import CourseDetail from '../features/course/CourseDetail';
import MainLayout from '../layouts/MainLayout';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/register" element={<LoginRegister />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        {/* ...autres routes */}
      </Route>
      <Route path="/" element={<div>Accueil</div>} />
    </Routes>
  );
}
