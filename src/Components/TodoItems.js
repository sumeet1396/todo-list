import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoItems extends Component {

    constructor() {
        super();
        this.state = {}
        this.onDeletedTodoClick = this.onDeletedTodoClick.bind(this);
    }

    onDeletedTodoClick = (todoId) => {
        console.log(todoId);
    }

    render() {
        return (
            
            <li className={this.props.bgColor} data-todo-id={this.props.id}>
                <div>
                    <span>{this.props.data}</span>
                </div>
                <div>
                    <button title="Complete"><FontAwesomeIcon icon="times-circle" /></button>
                    <button title="Update"><FontAwesomeIcon icon="pencil-alt" /></button>
                    <button title="Delete" onClick={this.onDeletedTodoClick.bind(this, this.props.id)}><FontAwesomeIcon icon="trash" /></button>
                </div>
            </li>
        )
    }
}

export default TodoItems
