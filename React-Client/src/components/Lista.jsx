import { useEmpleados } from "../context/Provider";
import { useNavigate } from "react-router-dom";

function Lista({ data })  {
    
    const objectKeys = Object.keys(data[0] || {});
    const { deleteEmpleado } = useEmpleados();
    const navigate = useNavigate();
  
    return (
      <table className="table-auto w-full border border-gray-200 rounded-md">
        <thead>
        <tr>
            <th className="px-2 py-1 text-left">Id</th>
            <th className="px-2 py-1 text-left">Nombre</th>
            <th className="px-2 py-1 text-left">Apellido</th>
            <th className="px-2 py-1 text-left">Razón Social</th>
            <th className="px-2 py-1 text-left">Teléfono</th>
            <th className="px-2 py-1 text-left">Cédula</th>
            <th className="px-2 py-1 text-left">País</th>
            <th className="px-2 py-1 text-left">Ciudad</th>
            <th className="px-2 py-1 text-left">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id || Math.random()}> 
              {objectKeys.map((key) => (
                <td key={key} className="px-2 py-1">{item[key]}</td>
              ))}
              <td className="px-2 py-1 flex gap-x-1">
              <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => deleteEmpleado(Empleado.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black"
          onClick={() => navigate(`/editar/${Empleado.id}`)}
        >
          Edit
        </button>
              {/* <button className="bg-green-500 btn px-2 py-1 rounded">Editar</button>
              <button className="bg-green-500 btn px-2 py-1 rounded">Eliminar</button> */}
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default Lista
