import React from 'react'
import '../styles/MainSection.css'

const MainSection = (props) => {

    const toggleTodo = item => props.onToggleTodo(item)

    return (
        <section>
            <ul>
                {props.list.map(item => (
                    <label className={item.done ? 'todo-completed' : 'todo'}>
                        <input 
                            type="checkbox"
                            checked={item.done}
                            onChange={ () => toggleTodo(item) } />
                        <li key={item.id}>
                            <label>
                                {item.description}
                            </label>
                        </li>
                    </label>
                ))}
            </ul>
        </section>
    )
}

export default MainSection