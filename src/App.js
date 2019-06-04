import React from 'react';
import './App.css';
import List from './List';
import NewTodo from './NewTodo';
import CheckBox from './CheckBox';
import Button from './Button';

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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: todos
    }
  }

  handleChange = (list) => {
    this.setState({ list: list });
  }

  addItem = (txt) => {
    const { list } = this.state;
    let id = 0;
    if(list.length > 0 ) {
      id = list[list.length-1].id;
    }
    const element = {
        id: id+1,
        description: txt,
        done: false
    }
    const nextState = [...list, element];
    this.handleChange(nextState);
  }

  checkTodo = (isChecked) => {
    const { list } = this.state;
    isChecked ? list.map(item => item.done = true) : list.map(item => item.done = false);
    this.handleChange(list);
  }

  deleteTodo = (list) => {
    list.splice(0, list.length);
    this.handleChange(list);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <NewTodo onAddTodo={this.addItem} />
        <CheckBox onChecked={this.checkTodo}/>
        <Button list={this.state.list} onDelete={this.deleteTodo}/>
        <List list={this.state.list} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default App;
