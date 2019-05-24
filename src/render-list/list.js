import React from 'react';
import './list.css';

const todos = [
    {
        id: 1,
        description: "Learn React",
        done: false
    },
    {
        id: 2,
        description: "Learn JS",
        done: false
    },
    {
        id: 3,
        description: "Learn how to use Gitub",
        done: true
    }
];

const TodoList = () => {
    return (
        <ul className="list">
            {todos.map(item => (
                <li key="item.id">
                    <div>{item.description}</div>
                </li>
            ))}
        </ul>
    )
};

export default TodoList;