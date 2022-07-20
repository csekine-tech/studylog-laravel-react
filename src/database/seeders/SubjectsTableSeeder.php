<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class SubjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subjects = ['英語', '数学', '物理', '化学', '生物', '現代文', '古文', '漢文', '日本史', '世界史', '地理'];
        foreach ($subjects as $subject) {
            $insertedSubject = [
                'name' => $subject,
                'created_at' => now(),
                'updated_at' => now()
            ];
            DB::table('subjects')->insert($insertedSubject);
        }
    }
}
