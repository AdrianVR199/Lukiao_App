<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Empleado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EmpleadoController extends Controller
{
    //consultar el listado de empleados
    public function index()
    {
        $empleados = Empleado::all();
        if ($empleados->isEmpty()) {
            $data = [
                'message' => 'No se encontraron empleados registrados en la base de datos',
                'status' => 200
            ];
            return response()->json($data, 404);
        }
        return response()->json($empleados);
    }

    // Crear un nuevo empleado
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|max:255',
            'apellido' => 'required|max:255',
            'razon_social' => 'required|max:255',
            'cedula' => 'required|unique:empleado',
            'telefono' => 'required|digits:10',
            'pais' => 'required|max:255',
            'ciudad' => 'required|max:255'
        ]);



        $empleado = Empleado::create($validatedData);
        return response()->json($empleado, 201);
    }

    // Mostrar un empleado específico
    public function show($id)
    {
        $empleado = Empleado::find($id);
        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);
        }
        return response()->json($empleado);
    }

    // Actualizar un empleado existente
    public function update(Request $request, $id)
    {
        $empleado = Empleado::find($id);
        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);
        }

        $validatedData = $request->validate([
            'nombre' => 'required',
            'apellido' => 'required',
            'razon_social' => 'required',
            'cedula' => 'required|unique:empleados,' . $empleado->id,
            'telefono' => 'required',
            'pais' => 'required',
            'ciudad' => 'required'
        ]);

        $empleado->update($validatedData);
        return response()->json($empleado);
    }

    // Eliminar un empleado
    public function destroy($id)
    {
        $empleado = Empleado::find($id);
        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);
        }

        $empleado->delete();
        return response()->json(['message' => 'Empleado eliminado']);
    }
}
