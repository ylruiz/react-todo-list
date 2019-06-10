import React from 'react';

class NewTodo extends React.Component {
    state = {txt: ''}
  
    handleChange = ( event ) => {
      this.setState({txt: event.target.value});    
    }
  
    handleSubmit = ( event ) => {
      event.preventDefault();
      if (this.state.txt) {
        this.props.onAddTodo(this.state.txt);
      }
      this.setState({txt: ''});
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input className='input-field' placeholder="What needs to be done?" 
                   type="text" 
                   onChange={this.handleChange}
                   value={this.state.txt}>
            </input>
        </form>
      )
    }
  }

export default NewTodo;  