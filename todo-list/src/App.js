import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItems';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      {title: 'Thức dậy', isComplete: true},
      {title: 'Đánh răng', isComplete: true},
      {title: 'Ăn sáng'},
      {title: 'Đi làm'}
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) => <TodoItem key={index} item={item} />)
        }
        {
          this.todoItems.length === 0 && 'Nothing here...'
        }
      </div>
    );
  }
}

export default App;
