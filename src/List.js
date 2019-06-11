import React from 'react';
import TodoItem from './TodoItem';

class List extends React.Component {
    state = {list: this.props.list}

    deleteItem = (item) => {
        const tempList = this.props.list;
        const index = tempList.map(x => {
            return x.id;
        }).indexOf(item.id);
        tempList.splice(index, 1);
        this.setState({ list: tempList });
        this.props.onChange(tempList);  
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