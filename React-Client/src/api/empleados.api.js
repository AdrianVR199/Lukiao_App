import axios from "axios";

export const getEmpleadosRequest = async () =>
  await axios.get("http://localhost:8000/api/empleados");

// export const getEmpleadosRequest = async () =>
//     await axios({
//       method: "GET",
//       withCredentials: true,
//       url: `http://localhost:8000/api/empleados`,
//     },[]);

export const createEmpleadoRequest = async (Empleado) =>
  await axios.post("http://localhost:8000/api/empleados", Empleado);

export const deleteEmpleadoRequest = async (id) =>
  await axios.delete(`http://localhost:8000/api/empleados/${id}`);

export const getEmpleadoRequest = async (id) =>
  await axios.get(`http://localhost:8000/api/empleados/1`);

export const updateEmpleadoRequest = async (id, newFields) =>
  await axios.put(`http://localhost:8000/api/empleados/${id}`, newFields);

export const toggleEmpleadoDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:8000/api/empleados/${id}`, {
    done,
  });