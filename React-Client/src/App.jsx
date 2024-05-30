import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import GestionEmpleado from "./pages/GestionEmpleado";
import FormularioEmpleado from "./pages/FormularioEmpleado";
import NoEncontrado from "./pages/NoEncontrado";
import Navbar from "./components/Navbar";
import { EmpleadoContextProvider } from "./context/Provider";
function App() {
 // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <EmpleadoContextProvider>
      <Routes>
        <Route path="" element={<GestionEmpleado />} />
        <Route path="/nuevo" element={<FormularioEmpleado />} />
        <Route path="*" element={<NoEncontrado />} />
        <Route path="/editar/:id" element={<FormularioEmpleado />} />
      </Routes>
      </EmpleadoContextProvider>
    </>
  );
}

export default App;
