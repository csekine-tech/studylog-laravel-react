<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'test',
            'email' => 'test@test.com',
            'password' => '$2y$10$knrlUOW/hqqi8cuBNaCvnO/zA6yce0FtKbSpbazn6OttJGLfgb5YC',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'test2',
            'email' => 'test2@test.com',
            'password' => '$2y$10$knrlUOW/hqqi8cuBNaCvnO/zA6yce0FtKbSpbazn6OttJGLfgb5YC',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('users')->insert([
            'name' => 'test3',
            'email' => 'test3@test.com',
            'password' => '$2y$10$knrlUOW/hqqi8cuBNaCvnO/zA6yce0FtKbSpbazn6OttJGLfgb5YC',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
