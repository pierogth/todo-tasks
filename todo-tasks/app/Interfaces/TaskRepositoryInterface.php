<?php

namespace App\Interfaces;

use Illuminate\Http\Request;


interface TaskRepositoryInterface 
{
    public function getAllTasks();
    public function createTask(Request $request);
    public function updateTask($taskId, Request $request);
    public function setStatusProgress($orderId);
    public function deleteTask($orderId);
}
