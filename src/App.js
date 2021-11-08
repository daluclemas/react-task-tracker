import Header from './Header';
import Task from './Task.js';
import { useState, useEffect } from 'react';
import AddTask from './AddTask';

function App() {

  const [tasks, setTasks] = useState([]);

  const [showAdd, setShowAdd] = useState(false);

  useEffect(()=>{

    const getTasks = async ()=>{

      const getTasksFromServer = await fetchTasks();

      setTasks(getTasksFromServer);

    }

    getTasks();

  }, []);

  // fetch data
  const fetchTasks = async ()=>{

    const res = await fetch('http://localhost:5000/tasks');

    const data = await res.json();

    // console.log(data);
    return data;

  };







  const delTask = async  (id)=>{
    
    await fetch(`http://localhost:5000/tasks/${id}`, {

    method: 'DELETE'
    });

    setTasks(
      tasks.filter(item=>{
        return item.id !== id;
      })
    );
  }



  const toggleReminder = async (id) =>{

    const taskToToggle = await fetchTasks(id);

    const  updTask = { ...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(updTask)

    });
    
    const data = await res.json();


    // setTasks(
    //   tasks.map(item=>{

    //     return item.id === id ? {...item, reminder: !item.reminder} : item;
    //   })
    // );

    setTasks(
      tasks.map(item=>{

        return item.id === id ? {...item, reminder: data.reminder} : item;
      })
    );

  }

  const addTask = async (task)=>{

    const res = await fetch('http://localhost:5000/tasks',{
        method: 'POST',
        headers:{
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data])



    // console.log(task);
    // const id = Math.floor(Math.random() * 1000) + 1;

    // const newTasks = {id, ...task};

    // setTasks([...tasks, newTasks]);
    // console.log(newTasks);
    
    
  }


  return (

    <div className="container">

      <Header title='task tracker' showAddTask={()=>setShowAdd(!showAdd)} btnText={showAdd} />

      { showAdd && <AddTask onAdd={addTask} /> }


      
      {
        tasks.length > 0 ? <Task task ={tasks} onDelete={delTask} onToggle={toggleReminder} /> : 'No task to show'
      }

    </div>

  );
}

export default App;
