import React from 'react'
import '../styles/Header.css'

const Header = (props) => {
    let input
  
    const handleSubmit = event => {
      event.preventDefault()
      props.onAddTodo(input.value)
      input.value = ''
    }

    return(
        <header>
            <h1> Todo List </h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="What needs to be done?" 
                    type="text" 
                    ref={node => input = node}/>
            </form>
        </header>
    )
}

export default Header