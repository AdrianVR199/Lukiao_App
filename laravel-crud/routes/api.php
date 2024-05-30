<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmpleadoController;


Route::controller(EmpleadoController::class)->group(function(){
    Route::get('/empleados',  'index');

    Route::get('/empleados/{id}', 'show');

    Route::post('/empleados', 'store');

    Route::put('/empleados/{id}', 'update');

    Route::patch('/empleados/{id}',  'updatePartial');

    Route::delete('/empleados/{id}', 'destroy');
});




