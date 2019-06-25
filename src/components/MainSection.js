import React from 'react'
import '../styles/MainSection.css'

const MainSection = (props) => {

    const toggleTodo = item => props.onToggleTodo(item)

    const deleteTodo = item => props.onDeleteTodo(item)

    const getVisibleFilter = (todos, filter) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos
        
            case 'SHOW_ACTIVE':
                return todos.filter(todo => !todo.done)

            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.done)
        
            default:
                throw new Error('Unknown filter: ' + filter)
        }
    }

    const list = getVisibleFilter(props.list, props.filter)

    return (
        <section className='main-section'>
            <ul className='todos'>
                {list.map(item => (
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
                                <label htmlFor={'toggle' + item.id} className='label-desc'>
                                    {item.description}
                                </label>
                            </label> 
                            <button className='delete' onClick={ () => deleteTodo(item) }> X </button>
                        </div>
                     </li>                 
                ))}
            </ul>
        </section>
    )
}

export default MainSection