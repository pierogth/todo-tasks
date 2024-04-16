<?php

namespace App\Http\Controllers;
use App\Interfaces\TaskRepositoryInterface;

use Illuminate\Http\Request;
use App\Models\Task;
use Inertia\Inertia;


class Tasks extends Controller
{
  /**************************
   * Using repository pattern
   **************************/
    private TaskRepositoryInterface $taskRepository;

    public function __construct(TaskRepositoryInterface $taskRepository) 
    {
        $this->taskRepository = $taskRepository;
    }

  /**********************************
   * Display a listing of the tasks.
   **********************************/
  public function index()
  {
    return Inertia::render('Tasks', [
      'tasks' => $this->taskRepository->getAllTasks(),
    ]);
   
  }

  /*******************************************
   * Store a newly created task in storage.
   ******************************************/
  public function store(Request $request)
  {
    /* a simple bakend validation */
    $request->validate([
      'title' => 'required|string|max:255',
      'status' => 'required|string|max:255',
      'deadline' => 'required|date',
      'category_id' => 'required|numeric',
      'priority_id' => 'required|numeric',
    ]);

    $this->taskRepository->createTask($request);
  }

    /******************************************
     * Update the specified task in storage.
     ******************************************/
    public function update(Request $request, $id)
    {
        $request->validate([
        'title' => 'required|string|max:255',
        'status' => 'required|string|max:255',
        'deadline' => 'required|date',
        'category_id' => 'required|numeric',
        'priority_id' => 'required|numeric',
        ]);
        $this->taskRepository->updateTask($id, $request);
    }

    /*************************************************************
     * Set the specified task with status in progress in storage.
     *************************************************************/
    public function inProgress($id)
    {
            $this->taskRepository->setStatusProgress($id);
    }


   /*******************************************
     * Remove the specified task from storage.
     ******************************************/
    public function destroy($id)
    {    
        $this->taskRepository->deleteTask($id);
    }
}
