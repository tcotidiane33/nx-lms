import { useId } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { breadcrumbHelper } from './breadcrumb-helper';
import type { IBredcrumbInterface } from './breadcrumb-interface';
import './breadcrumb.css';

export function BreadcrumbComponent({ title }: IBredcrumbInterface) {
  const { pathname } = useLocation();
  const helper = breadcrumbHelper();
  const pathnames = pathname.split('/').filter(Boolean);
  const id = useId();
  const totalProgress = ((pathnames.length) / (pathnames.length + 1)) * 100;

  return (
    <div className="space-y-2">
      <hr />
      <nav className="breadcrumb-nav" aria-label="Fil d'Ariane">
        <div className="breadcrumb-container">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link to="/" className="breadcrumb-link">
                <svg className="breadcrumb-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Accueil</span>
              </Link>
              <span className="breadcrumb-separator">/</span>
            </li>
            
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const displayText = title ? title : helper.translate(name);
              
              return isLast ? (
                <li key={`${id}-${index}`} className="breadcrumb-item active" aria-current="page">
                  <span>{displayText}</span>
                </li>
              ) : (
                <li key={`${id}-${index}`} className="breadcrumb-item">
                  <Link to={routeTo} className="breadcrumb-link">
                    {helper.translate(name)}
                  </Link>
                  <span className="breadcrumb-separator">/</span>
                </li>
              );
            })}
          </ol>
        </div>
      {/* Progress Bar */}
      </nav>
      <div className="w-full h-2 bg-transparent rounded-full overflow-hidden">
        <div 
          className="h-full  bg-gradient-to-r from-primary-100 to-primary-900 transition-all duration-300 ease-in-out rounded-full"
          style={{ width: `${totalProgress}%` }}
        />
      </div>
      <hr />

    </div>
  );
}