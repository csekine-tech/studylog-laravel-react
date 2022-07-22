<?php

namespace App\Http\Controllers;

use App\Models\Workbook;
use Illuminate\Http\Request;

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
}
