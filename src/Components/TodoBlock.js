import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoBlock extends Component {

    constructor() {
        super();
        this.state = {}
    }

    todoDelete = todoId => { this.props.deleteTodoHandler(todoId); }
	todoToggleClick = (todoId, status) => { this.props.todoToggleHandler(todoId, status) }

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
							todoToggleClick = {this.props.todoToggleHandler}
                        />
                    })
                }
            </ul>
        )
    }
}

export default TodoBlock
