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
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
    this.todoToggleHandler = this.todoToggleHandler.bind(this);
  }
  
  todoToggleHandler = (todoId, status) => {
    
    const colors = ["red","blue","green","yellow"];
    const randomColor = colors[Math.floor(Math.random()*colors.length)];

    let todoList = this.state.todoList;
    let todoIndex = 0;
    todoList.map((todo, index) => {
      if (todo.id === todoId) {
        todoIndex = index;
      }
    }, this);
    let todo = {...todoList[todoIndex]};

    if (status === "check") {
      todo.bgColor = "black";
      todo.isCompleted = true;
    } else {
      todo.bgColor = randomColor;
      todo.isCompleted = false;
    }

    todoList[todoIndex] = todo;
    this.setState({todoList});
  }

  deleteTodoHandler = (todoId) => {
    let todoList = this.state.todoList;
    let todoIndex = 0;
    todoList.map((todo, index) => {
      if (todo.id === todoId) {
          todoIndex = index;
      }
    }, this);
    let newTodo = todoList;
    newTodo.splice(todoIndex, 1);
    this.setState({todoList: newTodo});
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
          <TodoInputs 
            addTodoHandler={this.addTodoHandler}
          />
          <TodoBlock 
            todoList={this.state.todoList} 
            deleteTodoHandler={this.deleteTodoHandler} 
            todoToggleHandler={this.todoToggleHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
