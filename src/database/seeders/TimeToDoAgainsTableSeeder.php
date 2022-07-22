<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class TimeToDoAgainsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'user_id' => '1',
                'rate' => 1,
                'days' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ], [
                'user_id' => '1',
                'rate' => 2,
                'days' => 7,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'user_id' => '1',
                'rate' => 3,
                'days' => 14,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];
        foreach ($data as $item) {
            DB::table('time_to_do_agains')->insert($item);
        }
    }
}
