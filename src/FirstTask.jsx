import taskStyles from './FirstTask.module.css';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FirstTask = ({taskHeader, onDelete, onToggle}) => {
    return (
        <div className = {`${taskStyles.tasks} ${taskHeader.reminder ? taskStyles.reminder : ''}` } onDoubleClick={()=>{
            onToggle(taskHeader.id)
        }}>
            
            <div className={taskStyles.subtasks}>

                <h2>{taskHeader.text} </h2>

                <FaTimes style = {{color:'red', marginRight:20, cursor: 'pointer'}} onClick={()=>onDelete(taskHeader.id)} />

            </div>

            <p> {taskHeader.day} </p>
            
        </div>

    );
}

FirstTask.propTypes = {
    taskHeader : PropTypes.object,
    onDelete : PropTypes.func,
}

export default FirstTask;
