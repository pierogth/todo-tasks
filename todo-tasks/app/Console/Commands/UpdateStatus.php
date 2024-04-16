<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Task;

class UpdateStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:update-status {id} {status}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command change the status of a specific task setting the one given with input';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try{
            Task::whereId($this->argument('id'))->update(["status"=>$this->argument('status')]);
        }catch(Exception $e){
            $this->info('Something went wrong -> '.$e);
        }
        $this->info('Task succesfully updated!');
    }
}
