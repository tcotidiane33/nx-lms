import { Button } from '../button/button';
import { useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import type { ReactElement } from 'react';

export function ShowAllCourses():ReactElement {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="flex items-center justify-center w-full py-8">
      <Button
        text="Afficher tous les cours"
        onClick={() => navigate('/courses')}
        backgroundColor="main"
      />
    </div>
  );
}
