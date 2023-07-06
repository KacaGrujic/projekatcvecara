<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\FlowerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


//Route::post('/kontakt', [PorukaController::class, 'primiPoruku']);

//Route::get('/poruke', [PorukaController::class, 'index']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/contact', [MessageController::class, 'recieveMessage']);

Route::get('/messages', [MessageController::class, 'index']);

Route::get('/flower', [FlowerController::class, 'index']);
Route::post('/flower', [FlowerController::class, 'store']);
Route::put('/flower/{id}', [FlowerController::class, 'update']);
Route::delete('/flower/{id}', [FlowerController::class, 'destroy']);
Route::get('/flower/{id}', [FlowerController::class, 'show']);
Route::resource('order-items', OrderItemController::class);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get(
        '/profile',
        function (Request $request) {
            return auth()->user();
        }
    );
    Route::resource('orders', OrderController::class);


    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {

    Route::get(
        '/check',
        function () {
            return response()->json(['message' => 'Admin ulogovan'], 200);
        }
    );



});