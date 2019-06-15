import React from 'react';

const Header = (props) => {
    let input
  
    const handleSubmit = ( event ) => {
      event.preventDefault()
      if (!input.value.trim()) {
        return
      }
      props.onAddTodo(input.value)
      input.value = ''
    }
    
    return (
      <header>
          <h1>Todo List</h1>
          <form onSubmit={handleSubmit}>
            <input 
                className='input-field' 
                placeholder="What needs to be done?" 
                type="text" 
                ref={node => input = node}/>
          </form>
      </header>
    )
    
  }

export default Header;  