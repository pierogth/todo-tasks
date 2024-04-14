<?php

namespace App\Http\Controllers;
use App\Interfaces\TaskRepositoryInterface;

use Illuminate\Http\Request;
use App\Models\Task;
use Inertia\Inertia;


class Tasks extends Controller
{
    private TaskRepositoryInterface $taskRepository;

    public function __construct(TaskRepositoryInterface $taskRepository) 
    {
        $this->taskRepository = $taskRepository;
    }

     /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('Tasks', [
      'tasks' => $this->taskRepository->getAllTasks(),
    ]);
   
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'title' => 'required|string|max:255',

      'category_id' => 'required|numeric',
      'priority_id' => 'required|numeric',
    ]);

    $this->taskRepository->createTask($request);

    return $this->index();

  }

  /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $this->taskRepository->updateTask($id, $request);
       
        return $this->index();
    }

    /**
     * Set the specified resource with status in progress in storage.
     */
    public function inProgress($id)
    {
        //Category::delete(['id'=>$request->id]);
            $this->taskRepository->setStatusProgress($id);

        //$res = Task::where('id', $id)->update(["status"=>"In progress..."]);
    }


   /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {    
        $this->taskRepository->deleteTask($id);
    }
}
