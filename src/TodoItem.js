import React from 'react';

class TodoItem extends React.Component {
    state = {item : this.props.item};
    
    handleChange = () => {
        const item = this.state.item;
        const done = item.done ? false : true;
        item.done = done;
        this.setState({item: item});        
    }

    deleteItem = (event) => {
        event.preventDefault();
        this.props.onDeleteItem(this.props.item); 
    }

    render() {
        const item = this.state.item;
        return (
            <li> 
                <label className={item.done ? 'todo--completed' : 'todo'}>
                    <input type="checkbox" checked={item.done} onChange={this.handleChange}/>
                    {item.description}
                    <button onClick={this.deleteItem}> X </button>
                </label>
            </li>
        )
    }
  }

export default TodoItem;  