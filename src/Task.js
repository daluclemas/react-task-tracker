import taskStyle from './Task.module.css';
import FirstTask from './FirstTask';



const Task = ({ task, onDelete, onToggle }) => {

    const taskArr = task.map((item)=>{

        return <FirstTask taskHeader={item} key={item.id} onDelete = {onDelete} onToggle= {onToggle} />

    });


    return (
        <div className = {taskStyle.taskDiv}>
            
            {taskArr}

        </div>
    )
}

export default Task
