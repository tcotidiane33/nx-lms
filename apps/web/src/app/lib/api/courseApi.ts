import api from './apiClient';

export const fetchCourses = async () => {
  const res = await api.get('/courses');
  return res.data;
};
