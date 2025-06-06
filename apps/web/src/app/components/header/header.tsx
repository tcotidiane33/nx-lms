import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add auth state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container mx-auto px-4 py-2 backdrop-blur-md bg-white/80 rounded-lg">
        <div className="header__main">
          {/* Logo */}
          <div className="header__logo">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">
                KONDRO<span className="text-primary-600">NETWORKS</span>
              </span>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="header__nav hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
            >
              Cours
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
            >
              À propos
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
            >
              Contact
            </NavLink>
            {isAuthenticated && (
              <div className="relative group">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link--active' : ''}`
                  }
                >
                  Profile
                </NavLink>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    View Profile
                  </NavLink>
                </div>
              </div>
            )}
            {!isAuthenticated ? (
              <NavLink to="/login" className="nav-link">
                <button className="btn btn--primary">
                  Se connecter
                </button>
              </NavLink>
            ) : (
              <button 
                className="btn btn--secondary"
                onClick={() => setIsAuthenticated(false)}
              >
                Se déconnecter
              </button>
            )}
          </nav>

          {/* Bouton Hamburger Mobile */}
          <button
            className="header__hamburger-btn lg:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="hamburger-icon"></span>
          </button>

          {/* Menu Mobile */}
          <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
            <button
              className="header__close-btn"
              onClick={closeMenu}
              aria-label="Fermer"
            >
              &times;
            </button>
            <nav className="flex flex-col space-y-6 p-6">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
              >
                Accueil
              </NavLink>
              <NavLink
                to="/courses"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
              >
                Cours
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
              >
                À propos
              </NavLink>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
              >
                Contact
              </NavLink>
              {isAuthenticated && (
                <div className="relative">
                  <NavLink
                    to="/profile"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'nav-link--active' : ''}`
                    }
                  >
                    Profile
                  </NavLink>
                </div>
              )}
              {!isAuthenticated ? (
                <NavLink to="/login" className="nav-link" onClick={closeMenu}>
                  <button className="btn btn--primary">
                    Se connecter
                  </button>
                </NavLink>
              ) : (
                <button 
                  className="btn btn--secondary"
                  onClick={() => {
                    setIsAuthenticated(false);
                    closeMenu();
                  }}
                >
                  Se déconnecter
                </button>
              )}
            </nav>
          </div>

          {/* Backdrop Mobile */}
          <div
            className={`header__backdrop ${isMenuOpen ? 'active' : ''}`}
            onClick={closeMenu}
          ></div>
        </div>
      </div>
    </header>
  );
}