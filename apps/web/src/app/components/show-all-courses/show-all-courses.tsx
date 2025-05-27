import { Button } from '@components/button/button';
import { useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import type { ReactElement } from 'react';

export function ShowAllCourses():ReactElement {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <Button
          text="Afficher tous les cours"
          onClick={() => navigate('/courses')}
          backgroundColor="main"
        />
      </div>
    </div>
  );
}
