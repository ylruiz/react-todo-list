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
                    <a href='#/' className={(props.filter==='SHOW_ALL') ? 'button selected': 'button unselected'} onClick={ () => showAll() }> All </a>
                </li>
                <li>
                    <a href='#/' className={(props.filter==='SHOW_ACTIVE') ? 'button selected': 'button unselected'} onClick={ () => showActive() }> Active </a>
                </li>
                <li>
                    <a href='#/' className={(props.filter==='SHOW_COMPLETED') ? 'button selected': 'button unselected'} onClick={ () => showCompleted() }> Completed </a>
                </li>
            </ul> 
            <button className='button clear-completed' onClick={ () => clearCompleted() }> 
                Clear completed 
            </button>      
        </footer>
    )
}

export default Footer