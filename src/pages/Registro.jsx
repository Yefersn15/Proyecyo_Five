// Registro.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    registerEmail: "",  // Mantenemos registerEmail en lugar de email
    telefono: "",
    fechaNacimiento: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Función para buscar usuario por email en localStorage
  const findUserByEmail = (email) => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      return users.find(user => user.email.toLowerCase() === email.toLowerCase());
    } catch (error) {
      console.error("Error al buscar usuario:", error);
      return null;
    }
  };

  // Función para guardar usuario en localStorage
  const saveUserToStorage = (userData) => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      
      const newUser = {
        id: Date.now(), // ID único basado en timestamp
        username: userData.username,
        email: userData.registerEmail, // Usamos registerEmail como email
        password: userData.password,
        telefono: userData.telefono,
        fechaNacimiento: userData.fechaNacimiento
      };
      
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      
      return { success: true, user: newUser };
    } catch (error) {
      console.error("Error al guardar usuario:", error);
      return { success: false, error: "No se pudo guardar el usuario" };
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) setErrors({ ...errors, [e.target.id]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!userData.username.trim()) newErrors.username = "El nombre es obligatorio";
    if (!userData.password) newErrors.password = "La contraseña es obligatoria";
    if (!userData.confirmPassword) newErrors.confirmPassword = "Debes confirmar la contraseña";
    if (!userData.registerEmail.trim()) newErrors.registerEmail = "El email es obligatorio";
    if (!userData.telefono.trim()) newErrors.telefono = "El teléfono es obligatorio";
    if (!userData.fechaNacimiento) newErrors.fechaNacimiento = "La fecha de nacimiento es obligatoria";

    if (userData.registerEmail && !emailRegex.test(userData.registerEmail)) newErrors.registerEmail = "Ingrese un email válido";
    if (userData.telefono && !phoneRegex.test(userData.telefono)) newErrors.telefono = "El teléfono debe contener solo números (7-15 dígitos)";
    if (userData.password && !passwordRegex.test(userData.password)) newErrors.password = "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula y una minúscula";
    if (userData.password !== userData.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden";

    if (userData.fechaNacimiento) {
      const hoy = new Date();
      const fechaNac = new Date(userData.fechaNacimiento);
      let edad = hoy.getFullYear() - fechaNac.getFullYear();
      const m = hoy.getMonth() - fechaNac.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) edad--;
      if (edad < 13) newErrors.fechaNacimiento = "Debes tener al menos 13 años para registrarte";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const existingUser = findUserByEmail(userData.registerEmail);
      if (existingUser) {
        setErrors({ registerEmail: "Este email ya está registrado" });
        setLoading(false);
        return;
      }

      const result = saveUserToStorage(userData);
      if (result.success) {
        localStorage.setItem("currentUser", JSON.stringify(result.user));
        navigate("/Dashboard");
      } else {
        alert("Error al registrar usuario: " + result.error);
      }
    } catch (error) {
      alert("Error de conexión. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body p-5">
              <form onSubmit={handleSubmit} autoComplete="off">
                <h2 className="text-center mb-4">Registro⚡</h2>

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nombre:</label>
                  <input type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} id="username" required value={userData.username} onChange={handleChange} />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">Email:</label>
                  <input type="email" className={`form-control ${errors.registerEmail ? 'is-invalid' : ''}`} id="registerEmail" required value={userData.registerEmail} onChange={handleChange} />
                  {errors.registerEmail && <div className="invalid-feedback">{errors.registerEmail}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" required value={userData.password} onChange={handleChange} />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  <div className="form-text">Mínimo 8 caracteres, con al menos una mayúscula y una minúscula</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirmar Password:</label>
                  <input type="password" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} id="confirmPassword" required value={userData.confirmPassword} onChange={handleChange} />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono:</label>
                  <input type="tel" className={`form-control ${errors.telefono ? 'is-invalid' : ''}`} id="telefono" required value={userData.telefono} onChange={handleChange} />
                  {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="fechaNacimiento" className="form-label">Fecha Nacimiento:</label>
                  <input type="date" className={`form-control ${errors.fechaNacimiento ? 'is-invalid' : ''}`} id="fechaNacimiento" required value={userData.fechaNacimiento} onChange={handleChange} />
                  {errors.fechaNacimiento && <div className="invalid-feedback">{errors.fechaNacimiento}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Registrando..." : "Registrar"}
                </button>
              </form>
              <p className="mt-3 text-center">¿Ya tienes una cuenta? <Link to="/Login">Iniciar sesión</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;