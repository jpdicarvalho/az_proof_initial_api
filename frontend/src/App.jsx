import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";

// Verifica se o usuário está autenticado
const isUserAuthenticated = () => !!localStorage.getItem("token");

// Componente PrivateRoute para proteger rotas
const PrivateRoute = ({ children }) => {
  return isUserAuthenticated() ? children : <Navigate to="/" replace />;
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
