import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaginaBase from "./pages/PaginaBase";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";

function AppRoutes(){
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
              
                </Route>
                <Route path="/"  element={<PaginaBaseFormulario/>}>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;