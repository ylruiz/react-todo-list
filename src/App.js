import React from 'react';
import './App.css';
import TodoList from './render-list/list.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Render List</h1>
      </header>
      <body>
        <div id="root"><TodoList /></div>
      </body>
    </div>
  );
}

export default App;
