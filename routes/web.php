<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\File\FileController;
use App\Http\Controllers\Folder\FolderController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/',function(){
return redirect('/login');
});

Route::get('/dashboard/{path?}', [DashboardController::class,'index'
])->middleware(['auth', 'verified'])
    ->where('path', '.*')
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});

//Files paths
Route::post('/upload/file/{parent}', [FileController::class, 'store'
])->middleware(['auth','verified'])->name('file.store');

Route::get('/file/view/{id}', [FileController::class, 'view'
])->middleware(['auth','verified'])->name('file.view');

Route::get('/file/download/{id}', [FileController::class, 'fetch'
])->middleware(['auth','verified'])->name('file.download');

Route::post('/file/delete/{id}', [FileController::class, 'destroy'
])->middleware(['auth','verified'])->name('file.destroy');

Route::post('folders/create/{parent}', [FolderController::class, 'create'
])->middleware(['auth','verified'])->name('folder.create');





    Route::get('upload',function(){
        return Inertia::render('Upload');
    })->name('upload');



require __DIR__.'/auth.php';
