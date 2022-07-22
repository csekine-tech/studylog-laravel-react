<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;


class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i <= 100; $i++) {
            DB::table('questions')->insert([
                'workbook_id' => 1,
                'number' => $i,
            ]);
        }
        for ($i = 0; $i <= 50; $i++) {
            DB::table('questions')->insert([
                'workbook_id' => 2,
                'number' => $i,
            ]);
        }
        for ($i = 0; $i <= 50; $i++) {
            DB::table('questions')->insert([
                'workbook_id' => 3,
                'number' => $i,
            ]);
        }
    }
}
