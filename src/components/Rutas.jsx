import { Routes, Route } from "react-router-dom";
import GoogleSheetIntegration from '../utils/GoogleSheetIntegration';
import Register from "../pages/Registro";
import Nosotros from "../pages/Nosotros"
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<GoogleSheetIntegration />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Registro" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/DashBoard" element={<DashBoard />} />
        </Routes>
    )
}

export default Rutas;