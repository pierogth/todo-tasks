import { useMemo, useState, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_Row,
} from 'material-react-table';
import React from 'react';
import { Checkbox, Button } from '@material-tailwind/react'; // replace with the actual library you are using
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPencilAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import Modal from '@/Components/Modal';
import TaskForm from '@/Components/TaskForm'
import { useForm, router } from '@inertiajs/react';
import useRoute from '@/Hooks/useRoute';


export default function App({tasks}) {
  const [data, setData] = useState(tasks);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(true);

  const route = useRoute();

  console.log(tasks)

  const columns = useMemo(
    () => [
      {
        accessorKey: 'title', //simple recommended way to define a column
        header: 'Title',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.status, //alternate way
        id: 'status', //id required if you use accessorFn instead of accessorKey
        header: 'Status',
        Header: () => <i>Status</i>, //optional custom header render
      },
      {
        accessorFn: (row) => {switch(row.category_id){
          case 1:
            return "PC"
            break;
          case 2:
            return "Casa"
            break;
          case 3:
            return "Lavoro"
            break;
        }}, //alternate way
        id: 'category', //id required if you use accessorFn instead of accessorKey
        header: 'Category',
        Header: () => <i>Category</i>, //optional custom header render
      },
      {
        accessorFn: (row) => {switch(row.priority_id){
          case 1:
            return "Low"
            break;
          case 2:
            return "Medium"
            break;
          case 3:
            return "High"
            break;
        }}, //alternate way
        id: 'priority', //id required if you use accessorFn instead of accessorKey
        header: 'Priority',
        Header: () => <i>Priority</i>, //optional custom header render
      },
      {
        accessorFn: (row) => row.description, //alternate way
        id: 'description', //id required if you use accessorFn instead of accessorKey
        header: 'Description',
        Header: () => <i>Description</i>, //optional custom header render
      },
      {
        accessorFn: (row) => /// <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded" onClick={null}>
        <><FontAwesomeIcon icon={faTrash} className="h-5 w-5 text-red-500 hover:cursor-pointer" onClick={()=>{
                                                                                                              let text = "Sicuro di voler cancellare il Task?";
                                                                                                              if (confirm(text) == true) {
                                                                                                                router.delete(route('tasks.delete',row.id));
                                                                                                                setData(tasks.filter(task=>{return task.id!=row.id})) 
                                                                                                              } else {
                                                                                                                //text = "You canceled!";
                                                                                                              }}} />
        <FontAwesomeIcon icon={faPencilAlt} className="h-5 w-5 text-yellow-500 hover:cursor-pointer" onClick={()=>{setIsCreate(false);setDataIn(row); setModalIsOpen(true)}}/>
        <FontAwesomeIcon icon={faPlay} className="h-5 w-5 text-green-500 hover:cursor-pointer" onClick={()=>{const index3 = data.indexOf(row);
                                                                                                               data.splice(
                                                                                                                0,
                                                                                                                0,
                                                                                                                data.splice(index3, 1)[0],
                                                                                                              );
                                                                                                              data[0].status="In progress...";
                                                                                                              router.post(route('tasks.progress',row.id));
                                                                                                              setData([...data]);}}/></>,
      //</button>, //alternate way
        id: 'actions', //id required if you use accessorFn instead of accessorKey
        header: 'Actions',
      },
    ],
    [],
  );

  //optionally, you can manage any/all of the table state yourself
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    //do something when the row selection changes
  }, [rowSelection]);

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true, //enable some features
    enableRowOrdering: true,
    enableRowSelection: true,
    enablePagination: false, //disable a default feature
    onRowSelectionChange: setRowSelection, //hoist internal state to your own state (optional)
    state: { rowSelection }, //manage your own state, pass it back to the table (optional)
    muiRowDragHandleProps: ({ table }) => ({

      onDragEnd: () => {
        const { draggingRow, hoveredRow } = table.getState();
        if (hoveredRow && draggingRow) {
          data.splice(
            (hoveredRow as MRT_Row<any>).index,
            0,
            data.splice(draggingRow.index, 1)[0],
          );
          setData([...data]);
        }
      },
    }),
  });

  const [hideClosedTasks, setHideClosedTasks] = React.useState(false);

  const handleHideClosedTasksChange = (event) => {

    setHideClosedTasks(event.target.checked);
    if(event.target.checked){
      setData(tasks.filter(task=>{return task.status!=="Closed"}))
    }else{
      setData(tasks)
    }

  };

  const [dataIn, setDataIn] = useState({
    title: '',
    description: '',
    deadline: '',
    status: '',
    category_id: '',
    priority_id: '',
});

  return (
    <div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center text-right">
        <Checkbox className="m-3" id="hide-closed-tasks-checkbox" checked={hideClosedTasks} onChange={handleHideClosedTasksChange} />
        <label htmlFor="hide-closed-tasks-checkbox">
          Hide closed tasks
        </label>
      </div>
      <Button onClick={()=>setModalIsOpen(true)} className="bg-blue-500 m-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add task
      </Button>
    </div>
    <MaterialReactTable table={table} />
    <Modal isOpen={modalIsOpen} onClose={()=>{}}>
        <div className="flex justify-end">
          <button onClick={()=>setModalIsOpen(false)} className="text-red-500 hover:text-red-700 focus:outline-none font-medium text-3xl leading-6 tracking-wider">
            &times;
          </button>
        </div>
            <TaskForm data={dataIn} isCreate={isCreate}></TaskForm>
    </Modal>
  </div>
  );
}