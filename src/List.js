import React from 'react';
import TodoItem from './TodoItem';

class List extends React.Component {

    deleteItem = (item) => {
        const list = this.props.list;
        const index = list.indexOf(item);
        list.splice(index, 1);
        this.props.onChange(list);  
    }

    render() {
        return (
            <ul className="todos">
                {this.props.list.map(item => (
                    <TodoItem item={item} key={item.id} onDeleteItem={this.deleteItem} onChange={this.handleChange}/>
                ))}
            </ul>
        )
    }
  }

export default List;  