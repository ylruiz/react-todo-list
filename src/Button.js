import React from 'react';

class Button extends React.Component {
   
    deleteTodo = (event) => {
        event.preventDefault();
        this.props.onDelete(this.props.list); 
    }

    render() {
        return (
            <button onClick={this.deleteTodo}> X </button>
        )
    }
  }

export default Button;  