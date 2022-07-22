<?php

use App\Http\Controllers\SubjectController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\WorkbookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::middleware(['auth:sanctum'])->get('/users', function () {
//     return \App\Models\User::all();
// });
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/subjects', [SubjectController::class, 'index'])
    ->middleware('auth')
    ->name('subjects.index');

Route::get('/todolist', [TodoController::class, 'getFilteredQuestion'])
    ->middleware('auth')
    ->name('todos.questionfilter');

Route::get('/todolistfilteredworkbook', [TodoController::class, 'getFilteredWorkbook'])
    ->middleware('auth')
    ->name('todos.workbookfilter');

Route::get('/workbooklist', [WorkbookController::class, 'getWorkbookList'])
    ->middleware('auth')
    ->name('workbooks');

Route::get('/todo_date', [TodoController::class, 'getTodoDateRelations'])
    // ->middleware('auth')
    ->name('todos.daterelations');

Route::get('/workbook_subject', [WorkbookController::class, 'getWorkbookSubjectRelations'])
    // ->middleware('auth')
    ->name('workbook.subjectrelations');
