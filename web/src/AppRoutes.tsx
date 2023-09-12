import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaginaBase from "./pages/PaginaBase";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";
import RotaPrivada from "./utils/RotaPrivada";

function AppRoutes(){
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Home/>}/>
                    <Route element={<RotaPrivada/>}>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                    </Route>
                   
              
                </Route>
                <Route path="/"  element={<PaginaBaseFormulario/>}>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;