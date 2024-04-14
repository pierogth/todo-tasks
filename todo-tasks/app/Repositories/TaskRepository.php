<?php

namespace App\Repositories;

use App\Interfaces\TaskRepositoryInterface;
use App\Models\Task;
use Illuminate\Http\Request;


class TaskRepository implements TaskRepositoryInterface 
{
    public function getAllTasks() 
    {
        return Task::all();
    }

    public function createTask(Request $request) 
    {
            $task = new Task();
            $task->title = $request->title;
            $task->description = $request->description;
            $task->deadline = $request->deadline;
            $task->status = $request->status;
            $task->category_id = $request->category_id;
            $task->priority_id = $request->priority_id;
            $task->save();
    }

    public function updateTask($taskId, Request $request) 
    {
        $task = Task::find($taskId);
        $task->title = $request->title;
        $task->description = $request->description;
        $task->deadline = $request->deadline;
        $task->status = $request->status;
        $task->category_id = $request->category_id;
        $task->priority_id = $request->priority_id;
        $task->save();
    }

    public function setStatusProgress($taskId) 
    {
        return Task::whereId($taskId)->update(["status"=>"In Progress..."]);
    }

    public function deleteTask($taskId) 
    {
        Task::destroy($taskId);
    }

    

    

    public function getFulfilledOrders() 
    {
        return Order::where('is_fulfilled', true);
    }
}
