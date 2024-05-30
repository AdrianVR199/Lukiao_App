import { Form, Formik } from "formik";
import { useEmpleados } from "../context/Provider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FormularioEmpleado() {
  const { createEmpleado, getEmpleado, updateEmpleado } = useEmpleados();
  const [Empleado, setEmpleado] = useState({
    Nombre: "",
    Apellido: "",
    RazonSocial: "",
    Cedula: "",
    Telefono: "",
    Pais: "",
    Ciudad: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmpleado = async () => {
      if (params.id) {
        const Empleado = await getEmpleado(params.id);
        console.log(Empleado);
        setEmpleado({
          title: Empleado.title,
          description: Empleado.description,
        });
      }
    };
    loadEmpleado();
  }, []);

  return (
    <div>
      <Formik
        initialValues={Empleado}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateEmpleado(params.id, values);
          } else {
            await createEmpleado(values);
          }
          navigate("/");
          setEmpleado({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Empleado" : "Nuevo Empleado"}
            </h1>
            <label className="block mt-3">Nombre</label>
            <input
              type="text"
              name="Nombre"
              placeholder="Jhon"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.Nombre}
            />

            <label className="block mt-3">Apellido</label>
            <input
              type="text"
              name="Apellido"
              placeholder="Doe"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.Apellido}
            />

            <label className="block mt-3">Razón Social</label>
            <textarea
              name="RazonSocial"
              rows="3"
              placeholder="escribe tu Razón Social"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.RazonSocial}
            ></textarea>

            <label className="block mt-3">Cédula</label>
            <input
              type="text"
              name="Cedula"
              placeholder="12345678"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.Cedula}
            />
            <label className="block mt-3">Teléfono</label>
            <input
              type="text"
              name="Telefono"
              placeholder="12345678"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.Telefono}
            />
            <label className="block mt-3">País</label>
            <input
              type="text"
              name="Pais"
              placeholder="Colombia"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.Pais}
            />
            <label className="block mt-3">Ciudad</label>
            <input
              type="text"
              name="Ciudad"
              placeholder="Cali"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.Ciudad}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 mt-3 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormularioEmpleado;
