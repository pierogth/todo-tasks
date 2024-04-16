<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Task;

class CreateTask extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-task {title} {description?} {deadline?} {status=Open}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command create a new task';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try{
        $task = new Task();
        $task->title = $this->argument('title');
        $task->description = $this->argument('description') ?? '';
        $task->deadline = $this->argument('deadline') ?? date('Y-m-d');
        $task->status = $this->argument('status');
        $task->save();
        }catch(Exception $e){
            $this->info('Something went wrong -> '.$e);
        }
        $this->info('New Task succesfully created.');
    }
}
