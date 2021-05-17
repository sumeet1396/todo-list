import React, {Component} from 'react';
import './Components/FontAwesome';
import './App.css';
import TodoInputs from './Components/TodoInputs';
import TodoBlock from './Components/TodoBlock';

class App extends Component {
  constructor() {
    super();
    this.state = {
        todoList: []
    }
    this.addTodoHandler = this.addTodoHandler.bind(this);
  }

  addTodoHandler = (newTodo) => {
    let todoList = this.state.todoList;
        if (todoList.length > 0) {
            newTodo.id = todoList[todoList.length - 1].id + 1;
        } else {
            newTodo.id = 1;
        }
        todoList.push(newTodo);
        this.setState({ todoList: todoList });
        console.log(this.state.todoList);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-container">
          <h1>Task for the day</h1>
          <TodoInputs addTodoHandler={this.addTodoHandler}/>
          <TodoBlock todoList={this.state.todoList} />
        </div>
      </div>
    );
  }
}

export default App;
