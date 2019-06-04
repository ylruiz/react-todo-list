import React from 'react';
import TodoItem from './TodoItem';

class List extends React.Component {
    state = {list: this.props.list}

    deleteItem = (item) => {
        const { list } = this.state;
        const index = list.map(x => {
            return x.id;
        }).indexOf(item.id);
        list.splice(index, 1);
        this.setState({ list: list });
        this.props.onChange(this.state.list);  
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