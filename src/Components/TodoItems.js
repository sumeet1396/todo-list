import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoItems extends Component {

    constructor() {
        super();
        this.state = {}
        this.onDeletedTodoClick = this.onDeletedTodoClick.bind(this);
        this.onCompleteTodoClick = this.onCompleteTodoClick.bind(this);
        this.onUncheckTodoClick = this.onUncheckTodoClick.bind(this);
    }

    onDeletedTodoClick = (todoId) => {
        this.props.todoDelete(todoId);
    }

    onCompleteTodoClick = (todoId) => {
        const id = todoId - 1;
        this.props.todoComplete(id);
    }

    onUncheckTodoClick = (todoId) => {
        const id = todoId - 1;
        this.props.todoPending(id);
    }

    render() {
        return (
            
            <li className={this.props.bgColor} data-todo-id={this.props.id}>
                <div>
                    <span>{this.props.data}</span>
                </div>
                <div>
                    { this.props.status ? 
                      <button title="Uncheck" onClick={this.onUncheckTodoClick.bind(this, this.props.id)}><FontAwesomeIcon icon="times-circle" /></button> :     <button title="Check" onClick={this.onCompleteTodoClick.bind(this, this.props.id)}><FontAwesomeIcon icon="circle" /></button> 
                    }
                    {   this.props.status ? '' :
                        <button title="Update"><FontAwesomeIcon icon="pencil-alt" /></button>
                    }
                    <button title="Delete" onClick={this.onDeletedTodoClick.bind(this, this.props.id)}><FontAwesomeIcon icon="trash" /></button>
                </div>
            </li>
        )
    }
}

export default TodoItems
