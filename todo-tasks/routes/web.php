<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Tasks;



Route::get('/', [
    Tasks::class,
    'index',
  ])->name('tasks.index');

  Route::post('/task', [
    Tasks::class,
    'store',
  ])->name('tasks.store');

  Route::post('/task/{id}', [
    Tasks::class,
    'update',
  ])->name('tasks.update');

  Route::post('/task/progress/{id}', [
    Tasks::class,
    'inProgress',
  ])->name('tasks.progress');

  Route::delete('/task/{id}', [
    Tasks::class,
    'destroy',
  ])->name('tasks.delete');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
