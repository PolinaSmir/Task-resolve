/*

+ Задача:

Зробити ФУНКЦІОНАЛЬНУ компоненту, яка рендерить невеликий div 200x200,
рендерить там текст, але текст, який ця компонента має рендерити, вона отримує через пропси

*/

import './style.css';

function Indicator(props) {
    return(
        <div className='indicator'>
            {props.text}
        </div>
    )
}

export default Indicator;