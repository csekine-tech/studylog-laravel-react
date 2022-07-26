<?php

namespace App\Http\Controllers;

use App\Models\Workbook;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Subject;

class WorkbookController extends Controller
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

    public function getWorkbookList()
    {
        // $workbookList = Question::with('todos')
        //     ->whereHas('todos', function ($query) {
        //         $query->whereExists(function ($query) {
        //             return $query;
        //         });
        //     })->get();
        $workbookList = Workbook::all();

        return response()->json([
            'status' => 200,
            'workbookList' => $workbookList,
        ]);
    }

    public function getWorkbookSubjectRelations()
    {
        $relations = Workbook::all()->groupBy('subject_name');

        return response()->json([
            'status' => 200,
            'workbook_subject_relations' => $relations
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $workbook = new Workbook;
        $workbook->name = $request->input('name');
        $workbook->subject_id = Subject::where('name', '=', $request->input('subject_name'))->first()->id;
        $workbook->user_id = Auth::id();
        $workbook->count = $request->input('count');
        $workbook->save();
        //questionも自動生成する

        return response()->json([
            'status' => 200,
            'message' => 'store workbook successfully!'
        ]);
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
        Workbook::find($id)->delete();
        //questionも自動削除する
        return response()->json([
            'status' => 200,
            'id'=>$id,
            'message' => 'workbook removed successfully!'
        ]);
    }
}
