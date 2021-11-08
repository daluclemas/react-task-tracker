import buttons from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ( {text , clickMe ,showTaskAdd}) =>{

    return (

        <button className={`${buttons.btnHeader} ${showTaskAdd ? buttons.btnClose : buttons.btnAdd}`} onClick={clickMe}>
           {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    clickMe: PropTypes.func,
}

export default Button;