import { createContext, useContext, useState } from "react";
import {
  getEmpleadosRequest,
  deleteEmpleadoRequest,
  createEmpleadoRequest,
  getEmpleadoRequest,
  updateEmpleadoRequest,
  toggleEmpleadoDoneRequest,
} from "../api/empleados.api";
import { EmpleadoContext } from "./EmpleadoContext";

export const useEmpleados = () => {
  const context = useContext(EmpleadoContext);
  if (context === undefined) {
    throw new Error("useEmpleados must be used within a EmpleadoContext");
  }
  return context;
};

export const EmpleadoContextProvider = ({ children }) => {
  const [Empleados, setEmpleados] = useState([]);

  async function loadEmpleados() {
    const response = await getEmpleadosRequest();
    setEmpleados(response.data);
  }

  const deleteEmpleado = async (id) => {
    try {
      const response = await deleteEmpleadoRequest(id);
      setEmpleados(Empleados.filter((Empleado) => Empleado.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createEmpleado = async (Empleado) => {
    try {
      await createEmpleadoRequest(Empleado);
      // setEmpleados([...Empleados, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getEmpleado = async (id) => {
    try {
      const response = await getEmpleadoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmpleado = async (id, newFields) => {
    try {
      const response = await updateEmpleadoRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleEmpleadoDone = async (id) => {
    try {
      const EmpleadoFound = Empleados.find((Empleado) => Empleado.id === id);
      await toggleEmpleadoDoneRequest(id, EmpleadoFound.done === 0 ? true : false);
      setEmpleados(
        Empleados.map((Empleado) =>
          Empleado.id === id ? { ...Empleado, done: !Empleado.done } : Empleado
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmpleadoContext.Provider
      value={{
        Empleados,
        loadEmpleados,
        deleteEmpleado,
        createEmpleado,
        getEmpleado,
        updateEmpleado,
        toggleEmpleadoDone,
      }}
    >
      {children}
    </EmpleadoContext.Provider>
  );
};