import React from 'react'
import '../styles/Header.css'

const Header = (props) => {
    let input
  
    const handleSubmit = event => {
      event.preventDefault()
      props.onAddTodo(input.value)
      input.value = ''
    }

    const toggleTodos = () => props.onToggleTodos()

    const toggleTodosLabel = (props.total <= 0) ? 'label' :
                             (props.count === 0) ? 'label toggle-selected' : 
                             'label toggle-unselected'
        
    return(
        <header className='header'>
            <h1> Todo List </h1>
            <div className='container-header'>
                <input 
                    id='toggle-todos'
                    className='toggle-todos'
                    type="checkbox"
                    onChange={ () => toggleTodos() } />
                <label htmlFor='toggle-todos' className={toggleTodosLabel}></label>
                <form className='header-form' onSubmit={handleSubmit}>
                    <input
                        className='new-todo'
                        placeholder="What needs to be done?" 
                        type="text" 
                        ref={node => input = node}/>
                </form>
            </div>
        </header>
    )
}

export default Header