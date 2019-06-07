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
                <label className={item.done ? 'container todo--completed' : 'container todo'}>
                    <input className='input-item' type='checkbox' checked={item.done} onChange={this.handleChange}/>
                    <span className="checkmark"></span>
                    <label className='label-desc'>{item.description}</label>
                    <button className='delete delete--item' onClick={this.deleteItem}> X </button>
                </label>
            </li>
        )
    }
  }

export default TodoItem;  