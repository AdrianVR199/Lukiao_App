import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>Lukiao</h1>
      </Link>

      <ul className="flex gap-x-5">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1 rounded">Inicio</Link>
        </li>
        <li>
          <Link to="/nuevo" className="bg-green-500 px-2 py-1 rounded">Registrar nuevo Empleado</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
