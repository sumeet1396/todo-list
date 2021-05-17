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
    this.completeTodoHandler = this.completeTodoHandler.bind(this);
    this.uncheckTodoHandler = this.uncheckTodoHandler.bind(this);
  }

  uncheckTodoHandler = (todoId) => {
    const colors = ["red","blue","green","yellow"];
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    let todoList = [...this.state.todoList];
    let todo = {...todoList[todoId]};
    todo.bgColor = randomColor;
    todo.isCompleted = false;
    todoList[todoId] = todo;
    this.setState({todoList});
    console.log(todoId);
    console.log(this.state.todoList);
  }
  
  completeTodoHandler = (todoId) => {
    let todoList = [...this.state.todoList];
    let todo = {...todoList[todoId]};
    todo.bgColor = "black";
    todo.isCompleted = true;
    todoList[todoId] = todo;
    this.setState({todoList});
    console.log(todoId);
    console.log(this.state.todoList);
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
            completeTodoHandler={this.completeTodoHandler}
            uncheckTodoHandler={this.uncheckTodoHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
