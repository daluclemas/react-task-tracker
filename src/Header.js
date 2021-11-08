import styles from './Header.module.css';
import Button from './Button.js';

const Header = ( {title, showAddTask , btnText }) => {

    // const clickMeBtn = ()=>{
    //     console.log('clicked');
    // }

    return (
        <div className = {styles.header}>
            
            <h1>{title}</h1>

            <Button  text={btnText ? 'close' : 'add'} clickMe = {showAddTask} showTaskAdd={btnText} />


        </div>
    )
}

export default Header
