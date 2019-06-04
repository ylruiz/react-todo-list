import React from 'react';
import TodoItem from './TodoItem';

class List extends React.Component {
    render() {
        return (
            <ul className="todos">
                {this.props.list.map(item => (
                    <TodoItem item = {item} />
                ))}
            </ul>
        )
    }
  }

export default List;  