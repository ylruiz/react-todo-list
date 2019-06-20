import React from 'react'
import '../styles/MainSection.css'

const MainSection = (props) => {

    const toggleTodo = item => props.onToggleTodo(item)

    return (
        <section class='main-section'>
            <ul className='todos'>
                {props.list.map(item => (
                    <li key={item.id}>
                        <div className='container'>
                            <label className={item.done ? 'todo-completed' : 'todo'}>
                                <input 
                                    id={'toggle' + item.id}
                                    className='toggle'
                                    type="checkbox"
                                    checked={item.done}
                                    onChange={ () => toggleTodo(item) } />
                                <span className="checkmark"></span>       
                                <label for={'toggle' + item.id} className='label-desc'>
                                    {item.description}
                                </label>
                            </label> 
                        </div>
                     </li>                 
                ))}
            </ul>
        </section>
    )
}

export default MainSection