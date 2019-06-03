import React from 'react';
import './App.css';

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

class List extends React.PureComponent {
  render() {
    return (
      <ul className="App-list">
        {this.props.list.map(item => (
            <li key={item.id}>
                {item.description}
            </li>
        ))}
      </ul>
    )
  }
}

class NewTodo extends React.Component {
  state = {txt: ''}

  handleChange = ( event ) => {
    this.setState({txt: event.target.value});    
  }

  handleSubmit = ( event ) => {
    event.preventDefault();
    if (this.state.txt) {
      this.props.onAddTodo(this.state.txt);
    }
    this.setState({txt: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input placeholder="What needs to be done?" 
                 type="text" 
                 onChange={this.handleChange}
                 value={this.state.txt}>
          </input>
      </form>
    )
  }
}

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
