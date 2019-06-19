import React from 'react'

const MainSection = (props) => {

    const isCompleted = item => {
        return item.done ? 'todo-completed' : 'todo'
    }

    const toggleTodo = item => {
        props.onToggleTodo(item)
    }

    return (
        <section>
            <ul>
                {props.list.map(item => (
                    <label className={isCompleted(item)}>
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