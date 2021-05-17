import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoItems extends Component {

    constructor() {
        super();
        this.state = {}
        this.onDeletedTodoClick = this.onDeletedTodoClick.bind(this);
        this.onToggleClick = this.onToggleClick.bind(this);
    }

    onDeletedTodoClick = (todoId) => {
        this.props.todoDelete(todoId);
    }

    onToggleClick = (todoId, status) => {
        const id = todoId - 1;
        this.props.todoToggleClick(id, status);
    }

    render() {
        return (
            
            <li className={this.props.bgColor} data-todo-id={this.props.id}>
                <div>
                    <span>{this.props.data}</span>
                </div>
                <div>
                    { this.props.status ? 
                      <button title="Uncheck" onClick={this.onToggleClick.bind(this, this.props.id, "ucheck")}><FontAwesomeIcon icon="times-circle" /></button> :     <button title="Check" onClick={this.onToggleClick.bind(this, this.props.id, "check")}><FontAwesomeIcon icon="circle" /></button> 
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
