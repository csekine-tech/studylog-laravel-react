<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use App\Models\Todo;
use App\Models\Workbook;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use stdClass;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function getFilteredQuestion()
    {
        $todoList = Question::with('todos')
            ->whereHas('todos', function ($query) {
                $query->whereExists(function ($query) {
                    return $query;
                });
            })->get();

        return response()->json([
            'status' => 200,
            'todoList' => $todoList,
        ]);
    }
    public function getFilteredWorkbook()
    {
        $todoListFilteredWorkbook = Workbook::with(['questions' => function ($query) {
            $query->with(['todos' => function ($query) {
                $query->orderBy('planned_at', 'asc');
            }]);
        }])->get();
        return response()->json([
            'status' => 200,
            'todoListFilteredWorkbook' => $todoListFilteredWorkbook
        ]);
    }
    public function getTodoDateRelations()
    {
        $relations = Todo::whereDate('planned_at', '<=', Carbon::now()->addDay(7))
            ->get()
            ->groupBy('planned_at');

        return response()->json([
            'status' => 200,
            'todo_date_relations' => $relations
        ]);
    }
}
