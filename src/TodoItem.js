import React from 'react';

class TodoItem extends React.Component {
    state = {item : this.props.item};
    
    handleChange = ( event ) => {
        const item = this.state.item;
        const done = item.done ? false : true;
        item.done = done;
        this.setState({item: item});          
    }

    render() {
        const item = this.state.item;
        return (
            <li key={item.id}> 
                <label className={item.done ? 'todo--completed' : 'todo'}>
                    <input type="checkbox" checked={item.done} onChange={this.handleChange}/>
                    {item.description}
                </label>
            </li>
        )
    }
  }

export default TodoItem;  