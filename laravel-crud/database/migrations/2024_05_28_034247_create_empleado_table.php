<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empleado', function (Blueprint $table) {
            $table->string("Nombre", "50");
            $table->string("Apellido", "50");
            $table->string("Razon_Social", "255");
            $table->string("Cedula", "50");
            $table->integer("Telefono");
            $table->string("Pais", "50");
            $table->string("Ciudad", "50");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empleado');
    }
};
