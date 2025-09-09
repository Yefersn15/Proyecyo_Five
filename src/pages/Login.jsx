// Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Función para verificar credenciales con localStorage
  const findUserByCredentials = (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      return users.find(user => 
        user.email.toLowerCase() === email.toLowerCase() && 
        user.password === password
      );
    } catch (error) {
      console.error("Error al buscar usuario:", error);
      return null;
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = credentials.email.trim().toLowerCase();
    const password = credentials.password.trim();

    if (!email || !password) {
      setError("Por favor, completa todos los campos");
      setLoading(false);
      return;
    }

    try {
      const user = findUserByCredentials(email, password);
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate("/Dashboard");
      } else {
        setError("Credenciales incorrectas. Por favor, verifica tu email y contraseña.");
      }
    } catch (err) {
      setError("Error al conectar con el almacenamiento local. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Login ElectroStore</h2>

              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="alert alert-danger text-center" role="alert">
                    {error}
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="login-email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="login-email"
                    name="email"
                    required
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="login-password" className="form-label">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="login-password"
                    name="password"
                    required
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Ingrese su contraseña"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Cargando..." : "Ingresar"}
                </button>

                <p className="mt-3 text-center">
                  ¿No tienes una cuenta? <Link to="/Registro">Regístrese</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;