import React from 'react';

class Button extends React.Component {

    deleteTodo = (event) => {
        event.preventDefault();
        this.props.onDeleteTodo(this.props.list); 
    }
    
    deleteCompleted = (event) => {
        event.preventDefault();
        this.props.onDeleteCompleted(this.props.list); 
    }

    showAll = (event) => {
        event.preventDefault();
        this.props.onShowAll(this.props.list); 
    }

    showActive = (event) => {
        event.preventDefault();
        this.props.onShowActive(this.props.list); 
    }

    showCompleted = (event) => {
        event.preventDefault();
        this.props.onShowCompleted(this.props.list); 
    }

    onClickLabel = (label) => {
        switch(label){
            case 'X': {
                return this.deleteTodo;
            }
            case 'Clear completed': {
                return this.deleteCompleted;
            }
            case 'All': {
                return this.showAll;
            }
            case 'Active': {
                 return this.showActive;
            }
            case 'Completed': {
                return this.showCompleted;
            }
            default: console.log(this.props.label);
        }
    }

    classNameLabel = (label) => {
        switch(label){
            case 'X': {
                return 'delete-all';
            }
            case 'Clear completed': {
                return 'delete-completed';
            }
            case 'All': {
                return 'all';
            }
            case 'Active': {
                 return 'active';
            }
            case 'Completed': {
                return 'completed';
            }
            default: console.log(this.props.label);
        }
    }

    render() {
        const label = this.props.label;
        return (
            <button className={this.classNameLabel(label)} onClick={this.onClickLabel(label)}> {label} </button>
        )
    }
  }

export default Button;  