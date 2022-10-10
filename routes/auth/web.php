<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Backend\UserController;

Route::middleware('auth')->group(static function () {
    // Users page
    Route::get('users')->uses(UserController::class)->name('users');

    // Account logout
    Route::post('logout')->uses(LogoutController::class)->name('logout');
});
