import addTask from './AddTask.module.css';
import { useState } from 'react';

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const submitBtn = (e)=>{

        e.preventDefault();

        // validate form

        if(!text | !day){
            alert('input value');
            return;
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);

    }


    return (

        <form className={`${addTask.formInputs} ${addTask.displayFlex}`} onSubmit={submitBtn} >

            <div className={`${addTask.displayFlex} ${addTask.inputDiv}`}>

                <label htmlFor="addingTask">task</label>

                <input type="text" placeholder="add task..." className={`${addTask.addInputs}`} value={text} onChange={(e)=>setText(e.target.value)} />

            </div>

            
            <div className={`${addTask.displayFlex} ${addTask.inputDiv}`}>

                <label htmlFor="addingReminder">day & time</label>

                <input type="text" placeholder="day and time..." className={`${addTask.addInputs}`} value={day} onChange={(e)=>setDay(e.target.value)} />

            </div>

            
            <div className={`${addTask.flexDisplay} ${addTask.inputDiv}`}>

                <label htmlFor="addingTask">set reminder</label>

                <input type="checkbox"  className={addTask.reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />

            </div>

            <div className={addTask.btnContainer}>
                <button className={addTask.btn} type='submit'>save task</button>
            </div>


            
        </form>
    );
}

export default AddTask
