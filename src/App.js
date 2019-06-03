import React from 'react';
import './App.css';
import List from './List';
import NewTodo from './NewTodo';

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

  addItem = (txt) => {
    const { list } = this.state;
    const element = {
        id: list.length+1,
        description: txt,
        done: false
    }
    const nextState = [...list, element];
    this.setState({ list: nextState });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Render List</h1>
        </header>
        <NewTodo onAddTodo={this.addItem}/>
        <List list={this.state.list}/>
      </div>
    )
  }
}

export default App;
