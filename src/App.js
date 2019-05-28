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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      txt: '',
      list: todos
    };
    this.handleChange = this.handleChange.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleChange( e ){
    this.setState({txt: e.target.value});    
  }
  keyPressed( e ){
    if (e.key === "Enter") {
      this.addItem();
    }
  }
  addItem(){
    const { txt, list } = this.state;
    if(txt){
      const element = {
        id: list.length,
        description: txt,
        done: false
      };
      const nextState = [...list, element];
      this.setState({ list: nextState, inputValue: '' });
      console.log(nextState);
    }
  }
  render(){
    const { list, txt } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Render List</h1>
        </header>
        <form>
          <input placeholder="What needs to be done?" 
                 type="text" 
                 onChange={this.handleChange}
                 onKeyPress={this.keyPressed}
                 value={txt}>
          </input>
        </form>
        <ul className="App-list">
            {list.map(item => (
                <li key={item.id}>
                    {item.description}
                </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default App;
