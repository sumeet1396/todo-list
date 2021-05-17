import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoBlock extends Component {

    constructor() {
        super();
        this.state = {}
    }

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
                        />
                    })
                }
            </ul>
        )
    }
}

export default TodoBlock
