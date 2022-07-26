<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\TimeToDoAgain;
use Illuminate\Http\Request;
use App\Models\Todo;
use App\Models\Workbook;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use stdClass;
use Illuminate\Support\Facades\Auth;

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
        $isFirstRated = false;
        $todo = Todo::where('user_id', Auth::user()->id)->find($id);
        $todo->planned_at = $request->input('planned_at');
        if (($todo->rate === null || $todo->rate === 0) && ($request->input('rate') !== null && $request->input('rate') !== 0)) {
            $isFirstRated = true;
        }
        if ($request->input('rate') || $request->input('rate') !== 0) {
            $todo->rate = $request->input('rate');
        }
        if ($request->input('done_at')) {
            $todo->done_at = $request->input('done_at');
        }
        $todo->save();
        //rate=maxの時おしまい
        //rate=maxでなく、doneとrateが初めて登録されたなら、新たなtodoを作成する
        if ($isFirstRated) {
            if ($request->input('rate') !== 4) {
                $newTodo = new Todo;
                $addedDay = TimeToDoAgain::find($request->input('rate'))->days;
                $newTodo->planned_at = Carbon::parse($request->input('done_at'))->addDay($addedDay);
                $newTodo->question_id = $todo->question->id;
                $newTodo->user_id = Auth::user()->id;
                $newTodo->save();
            }
        }

        return response()->json([
            'status' => 200,
            'message' => 'updated successfully!',
        ]);
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
        $todoList = Question::where('user_id', Auth::user()->id)->with(['todos' => function ($query) {
            $query->orderBy('id', 'desc');
        }])
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
        $todoListFilteredWorkbook = Workbook::where('user_id', Auth::user()->id)->with(['questions' => function ($query) {
            $query->with(['todos' => function ($query) {
                $query->orderBy('id', 'desc');
            }]);
        }])->get();
        return response()->json([
            'status' => 200,
            'todoListFilteredWorkbook' => $todoListFilteredWorkbook
        ]);
    }
    public function getTodoDateRelations()
    {
        //done_at===nullのものは残す、done_at!==nullで今日より前のものは取得しない
        $relations = Todo::where('user_id', Auth::user()->id)->whereDate('planned_at', '<=', Carbon::now()->addDay(7))
            ->where('done_at', null)
            ->orWhere(function ($e) {
                $e->whereDate('planned_at', '>=', Carbon::now());
            })
            ->orderBy('planned_at', 'asc')
            ->get()
            ->groupBy(['planned_at']);

        return response()->json([
            'status' => 200,
            'todo_date_relations' => $relations,
        ]);
    }
}
