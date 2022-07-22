<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('todos')->insert(
            [
                'question_id' => 1,
                'planned_at' => now(),
                'done_at' => now(),
                'rate' => 2
            ]
        );
        DB::table('todos')->insert(
            [
                'question_id' => 2,
                'planned_at' => now(),
            ]
        );
        DB::table('todos')->insert(
            [
                'question_id' => 3,
                'planned_at' => now(),
            ]
        );
        DB::table('todos')->insert(
            [
                'question_id' => 1,
                'planned_at' => new Carbon('+5 day')
            ]
        );
        DB::table('todos')->insert(
            [
                'question_id' => 4,
                'planned_at' => new Carbon('+10 day')
            ]
        );
    }
}
