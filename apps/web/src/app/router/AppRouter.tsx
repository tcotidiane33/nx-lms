import { Routes, Route } from 'react-router-dom';
import Dashboard from '@pages/dashboard/Dashboard';
import CourseDetail from '@pages/courses/CourseDetail';
import MainLayout from '../layouts/MainLayout';
import {Home} from "@pages/home/Home";
import {LogIn} from "@pages/login/LogIn";
import {SignUp} from "@pages/signup/SignUp";
import {Courses} from "@pages/courses/Courses";
import {Contact} from "@pages/contact/contact";
import {NotFound} from "@pages/not-found/not-found";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<MainLayout />}>
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<div>Accueil</div>} />

      <Route path="/not-found" element={<NotFound />} />

    </Routes>
  );
}
