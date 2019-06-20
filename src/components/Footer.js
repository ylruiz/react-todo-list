import React from 'react'
import '../styles/Footer.css'

const Footer = (props) => {

    const count = props.count

    const clearCompleted = () => props.onClearCompleted() 

    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong> {count} </strong>
                <span>item</span>
                <span> left</span>
            </span>
            <ul className='filters'>
                <li>
                    <button className='button filter'> All </button>
                </li>
                <li>
                    <button className='button filter'> Active </button>
                </li>
                <li>
                    <button className='button filter'> Completed </button>
                </li>
            </ul> 
            <button className='button clear-completed' onClick={ () => clearCompleted() }> 
                Clear completed 
            </button>      
        </footer>
    )
}

export default Footer