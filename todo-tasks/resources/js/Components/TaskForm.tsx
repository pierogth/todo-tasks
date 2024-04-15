import { useForm, router } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import useRoute from '@/Hooks/useRoute';


const TaskForm = (props) => {
  const form = useForm({
    title: null,
    description: null,
    deadline: null,
    status: null,
    category_id: null,
    priority_id: null,
  })

    const [errors, setErrors] = useState({});
    const route = useRoute();

  function submit() {
    event.preventDefault();
    if(props.isCreate){
    form.post(route('tasks.store'), {
       onError: (e: any) => {
        setErrors(e);
        console.log("ERRORE---->"+e)
       },
       onSuccess: response => {
         console.log(response);
         router.visit(route('tasks.index'));
       },
       onFinish: () => {},
     });
    }else{
        form.post(route('tasks.update', props.data.id), {
            onError: (e: any) => {
             setErrors(e);
             console.log("ERRORE---->"+e)
            },
            onSuccess: response => {
              console.log(response);
              //setToggleNotification(!toggleNotification);
              router.visit(route('tasks.index'));
            },
            onFinish: () => {},
          });
    }
  }
  const [formData, setFormData] = useState(props.data);
 
 useEffect(() => {
  
     form.setData(formData)

 }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
    };

  return (
    <form onSubmit={()=>submit()} className={`bg-white text-black dark:bg-black dark:text-white p-4 rounded`}>
              
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 dark:text-white font-bold mb-2">Title</label>
            <input type="text" name="title" id="title"
                value={formData.title}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-black leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 dark:text-white font-bold mb-2">Description</label>
            <textarea name="description" id="description"
                value={formData.description}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-black leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="deadline" className="block text-gray-700 dark:text-white font-bold mb-2">Deadline</label>
            <input type="date" name="deadline" id="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-black leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700 dark:text-white font-bold mb-2">Status</label>
            <select name="status" id="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-black leading-tight focus:outline-none focus:shadow-outline" required>
             <option value="">Choose one...</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 dark:text-white font-bold mb-2">Category</label>
            <select name="category_id" id="category" 
                    value={formData.category_id}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-black leading-tight focus:outline-none focus:shadow-outline" required>
              <option value="">Choose one...</option>
              <option value="1">PC</option>
              <option value="2">Casa</option>
              <option value="3">Lavoro</option>
          </select>
          </div>
          <div className="mb-4">
            <label htmlFor="priority" className="block text-gray-700 dark:text-white font-bold mb-2">Priority</label>
            <select name="priority_id" id="priority" 
                    value={formData.priority_id}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-black leading-tight focus:outline-none focus:shadow-outline" required>
              <option value="">Choose one...</option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>{props.isCreate ? 'Add' : 'Edit'}</button>
          </div>
        </form>
  )
}

export default TaskForm