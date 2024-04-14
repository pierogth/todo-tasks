<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            'name' => 'PC',
        ]);
        DB::table('categories')->insert([
            'name' => 'Casa',
        ]);
        DB::table('categories')->insert([
            'name' => 'Lavoro',
        ]);

        DB::table('priorities')->insert([
            'name' => 'Bassa',
        ]);
        DB::table('priorities')->insert([
            'name' => 'Medio',
        ]);
        DB::table('priorities')->insert([
            'name' => 'Alta',
        ]);

        DB::table('tasks')->insert([
            'title' => 'Pulire giardino',
            'description' => '',
            'deadline' => '2024-05-05',
            'status' => 'Open',
            'closed_at' => null,
            'category_id' => '2',
            'priority_id' => '1',
        ]);

        DB::table('tasks')->insert([
            'title' => 'Backup Dati',
            'description' => '',
            'deadline' => '2024-05-15',
            'status' => 'In progress',
            'closed_at' => null,
            'category_id' => '1',
            'priority_id' => '1',
        ]);

        DB::table('tasks')->insert([
            'title' => 'Aggiornamento versione node JS',
            'description' => '',
            'deadline' => '2024-05-15',
            'status' => 'Closed',
            'closed_at' => '2024-05-04',
            'category_id' => '3',
            'priority_id' => '2',
        ]);

    }
}
