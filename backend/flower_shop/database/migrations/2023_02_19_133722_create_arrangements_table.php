<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('arrangements', function (Blueprint $table) {
            $table->id('arrangement_id');
            $table->string('name');
            $table->string('description');
            $table->integer('quantity');
            $table->double('price',5,2);
            $table->foreignId('category_id');
            $table->foreignId('flower_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('arrangements');
    }
};
