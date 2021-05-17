import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoBlock extends Component {

    constructor() {
        super();
        this.state = {}
    }

    todoDelete = todoId => { this.props.deleteTodoHandler(todoId); }
    todoComplete = todoId => { this.props.deleteTodoHandler(todoId); }
    todoPending = todoId => { this.props.uncheckTodoHandler(todoId); }

    render() {

        return (
            <ul className="todo-list">
                {
                    this.props.todoList.map(todo => {
                        return <TodoItems 
                            key = {todo.id}
                            id = {todo.id}
                            bgColor = {todo.bgColor}
                            data = {todo.todos}
                            date= {todo.date} 
                            status = {todo.isCompleted}
                            todoDelete = {this.props.deleteTodoHandler}
                            todoComplete = {this.props.completeTodoHandler}
                            todoPending = {this.props.uncheckTodoHandler}
                        />
                    })
                }
            </ul>
        )
    }
}

export default TodoBlock
