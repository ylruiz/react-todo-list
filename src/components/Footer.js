import React from 'react'
import '../styles/Footer.css'

const Footer = (props) => {

    const count = props.count

    const clearCompleted = () => props.onClearCompleted() 

    const showAll = () => {props.onFilter('SHOW_ALL')}

    const showActive = () => props.onFilter('SHOW_ACTIVE')

    const showCompleted = () => props.onFilter('SHOW_COMPLETED')

    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong> {count} </strong>
                <span>item</span>
                <span> left</span>
            </span>
            <ul className='filters'>
                <li>
                    <button className='button filter' onClick={ () => showAll() }> All </button>
                </li>
                <li>
                    <button className='button filter' onClick={ () => showActive() }> Active </button>
                </li>
                <li>
                    <button className='button filter' onClick={ () => showCompleted() }> Completed </button>
                </li>
            </ul> 
            <button className='button clear-completed' onClick={ () => clearCompleted() }> 
                Clear completed 
            </button>      
        </footer>
    )
}

export default Footer