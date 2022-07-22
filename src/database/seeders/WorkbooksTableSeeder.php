<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class WorkbooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('workbooks')->insert(
            [
                'name' => '青チャート1',
                'user_id' => 1,
                'subject_id' => 2,
                'count' => 100
            ]
        );
        DB::table('workbooks')->insert(
            [
                'name' => 'プラチカ',
                'user_id' => 1,
                'subject_id' => 2,
                'count' => 50
            ]
        );
        DB::table('workbooks')->insert(
            [
                'name' => 'セミナー',
                'user_id' => 1,
                'subject_id' => 4,
                'count' => 50
            ]
        );
    }
}
