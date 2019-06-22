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
                return todos.filter(todo => !todo.completed)

            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.completed)
        
            default:
                throw new Error('Unknown filter: ' + filter)
        }
    }

    const list = getVisibleFilter(props.list, props.filter)
    
    console.log(list)

    return (
        <section class='main-section'>
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
                                <label for={'toggle' + item.id} className='label-desc'>
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