<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Task;

class DeleteTask extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:delete-task {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command delete a specific task from DB';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try{
            Task::destroy($this->argument('id'));
        }catch(Exception $e){
            $this->info('Something went wrong -> '.$e);
        }
        $this->info('Task with id '.$this->argument('id').' succesfully deleted');
    }
}
