import { useEffect } from "react";

import { useEmpleados } from "../context/Provider";
import Lista from '../components/Lista';
function GestionEmpleado() {
  const { Empleados, loadEmpleados } = useEmpleados([]);
 const list=[{
  "id":"1",
  "nombre":"David",
  "apellido":"Lopez",
  "razon_social":"1",
  "cedula":"123455",
  "telefono":2343434,
  "pais":"Colombia",
  "ciudad":"Cali"
}]
  useEffect(() => {
    loadEmpleados();
  }, []);



  return (
    <div>
      <h1 className="text-2xl font-bold text-left mt-4 mb-5 ml-3">Empleados</h1>
      
    
      <div className="container mx-auto">
      <Lista data={Empleados}/>

      </div>
    </div>
  );
}

export default GestionEmpleado;
