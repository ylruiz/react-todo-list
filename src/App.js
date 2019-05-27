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
    this.addElement = this.addElement.bind(this);
  }
  handleChange( e ){
    this.setState({txt: e.target.value});    
  }
  keyPressed( e ){
    if (e.key === "Enter") {
      this.addElement();
    }
    
  }
  addElement(){
    const element = {
      id: this.state.list.length,
      description: this.state.txt,
      done: false
    };
    this.setState({list: [...this.state.list, element]});
    console.log(this.state.list);
    this.setState( {txt: ""} );
  }
  render(){
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
                    value={this.state.txt}>
          </input>
      </form>
        <ul className="App-list" >
            {this.state.list.map(item => (
                <li key="item.id">
                    <div>{item.description}</div>
                </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default App;
