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

  deleteCompleted = (list) => {
    const listTemp = list.filter(item => !item.done);
    this.handleChange(listTemp);
  }

  showAll = (list) => {
    console.log('Show All');
    console.log(list);
  }

  showActive = (list) => {
    console.log('Show Active');
    console.log(list);
  }

  showCompleted = (list) => {
    console.log('Show Completed');
    console.log(list);
  }

  render(){
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Todo List</h1>
          <NewTodo onAddTodo={this.addItem}/>
          <Button list={this.state.list} label='X' onDeleteTodo={this.deleteTodo}/>
        </header>
        <section className='main'>
          <CheckBox onChecked={this.checkTodo}/>
          <List list={this.state.list} onChange={this.handleChange}/>
        </section>
        <footer className='footer'>
          <span className='todo-count'>
            <strong>1</strong>
            <span>item</span>
            <span> left</span>
          </span>
          <ul className='filters'>
            <li>
              <Button list={this.state.list} label='All' onShowAll={this.showAll}/>
            </li>
            <li>
              <Button list={this.state.list} label='Active' onShowActive={this.showActive}/>
            </li>
            <li>
              <Button list={this.state.list} label='Completed' onShowCompleted={this.showCompleted}/>
            </li>
          </ul>       
          <Button list={this.state.list} label='Clear completed' onDeleteCompleted={this.deleteCompleted}/>
        </footer>
      </div>
    )
  }
}

export default App;