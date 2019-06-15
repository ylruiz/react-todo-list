import React from 'react';

const MainSection = (props) => {

    const completeTodo = (item) => {
        props.onCompleteTodo(item)
    }
    
    return (
        <section className='main'>
            <ul className="todos">
                {props.list.map(item => (
                <li key={item.id}>
                    <label className={item.done ? 'container todo--completed' : 'container todo'}>
                        <input
                            className='input-item'
                            type="checkbox"
                            checked={item.done}
                            onChange={ () => completeTodo(item) }//toggleTodo
                        />
                        <span className="checkmark"></span>
                        <label className='label-desc'>
                            {item.description}
                        </label>
                    </label>
                </li>
                ))}
            </ul>
        </section>
    )
    
  }

export default MainSection;  