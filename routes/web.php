<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// home route
Route::get('')->uses(HomeController::class)->name('home');

// auth routes
Route::prefix('auth')->group(static function () {
    // registration routes
    Route::resource('register', RegisterController::class);

    // login routes
    Route::resource('login', LoginController::class);
});

// --------------------------------------------------------------------
include_once __DIR__ . '/auth/web.php';
