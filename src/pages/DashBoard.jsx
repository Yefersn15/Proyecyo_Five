// Dashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener usuario de localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    
    if (!currentUser) {
      navigate("/Login");
      return;
    }
    
    setUser(currentUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  if (!user) {
    return <div className="text-center mt-5">Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h2>Bienvenido, {user.username}!</h2>
            </div>
            <div className="card-body p-5">
              <div className="row">
                <div className="col-md-6">
                  <h4>Información de tu cuenta</h4>
                  <div className="mt-4">
                    <p><strong>Nombre:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Teléfono:</strong> {user.telefono}</p>
                    <p><strong>Fecha de nacimiento:</strong> {user.fechaNacimiento}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4>Acciones</h4>
                  <div className="d-grid gap-2 mt-4">
                    <button className="btn btn-outline-primary">Ver historial de compras</button>
                    <button className="btn btn-outline-primary">Actualizar información</button>
                    <button className="btn btn-outline-primary">Cambiar contraseña</button>
                    <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar sesión</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;