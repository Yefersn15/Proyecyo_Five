// Menu.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si hay un usuario logueado en localStorage
    const checkAuthStatus = () => {
      const currentUser = localStorage.getItem('currentUser');
      setIsLoggedIn(!!currentUser);
    };

    checkAuthStatus();

    // Escuchar cambios en el almacenamiento local
    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // También verificar periódicamente por cambios (para la misma pestaña)
    const interval = setInterval(checkAuthStatus, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    window.location.href = '/'; // Redirigir a la página principal
  };

  return (
    <nav className={`text-light navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">ElectroStore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Nosotros">Nosotros</Link>
            </li>
            
            {/* Mostrar enlaces según el estado de autenticación */}
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Dashboard">Mi Cuenta</Link>
                </li>
                <li className="nav-item">
                  <button 
                    className="nav-link text-white btn btn-link" 
                    onClick={handleLogout}
                    style={{ textDecoration: 'none', border: 'none', background: 'none' }}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Registro">Registro</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;