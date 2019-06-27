import React, {useState} from 'react'
import '../styles/MainSection.css'

const MainSection = (props) => {

    let input

    const [edit, setEdit] = useState('edit hidden')

    const toggleTodo = item => props.onToggleTodo(item)

    const deleteTodo = item => props.onDeleteTodo(item)

    const handleChangeEdit = () => (edit === 'edit hidden') ? 
                               setEdit('edit show') : 
                               setEdit('edit hidden') 

    const editTodo = (item) => {
        props.onEditTodo(item, input.value)
        handleChangeEdit()
    }
                        
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
                                    onChange={ () => toggleTodo(item) }/>
                                <span className="checkmark"></span>      
                                <label className='label-desc' 
                                       onDoubleClick={handleChangeEdit}>
                                    {item.description}
                                </label>
                            </label> 
                            <button className='delete' onClick={ () => deleteTodo(item)}> 
                                X
                            </button>        
                        </div>
                        <input
                            className={edit}
                            type='text' 
                            defaultValue = {item.description}
                            ref={node => input = node}
                            onBlur={() => editTodo(item)}/>
                     </li>                 
                ))}
            </ul>
        </section>
    )
}

export default MainSection