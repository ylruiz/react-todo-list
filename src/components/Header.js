import React from 'react'

const Header = (props) => {
    let input
  
    const handleSubmit = event => {
      event.preventDefault()
      props.onAddTodo(input.value)
      input.value = ''
    }

    return(
        <header className='header'>
            <h1> Todo List </h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='new-todo'
                    placeholder="What needs to be done?" 
                    type="text" 
                    ref={node => input = node}/>
            </form>
        </header>
    )
}

export default Header