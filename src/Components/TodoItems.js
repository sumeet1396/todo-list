import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoItems extends Component {
    constructor() {
        super();
        this.state = {
            todoList: []
        }
    }

    render() {
        return (
            <li className={this.props.bgColor}>
                <div>
                    <span>Item 1</span>
                </div>
                <div>
                    <button title="Complete"><FontAwesomeIcon icon="times-circle" /></button>
                    <button title="Update"><FontAwesomeIcon icon="pencil-alt" /></button>
                    <button title="Delete"><FontAwesomeIcon icon="trash" /></button>
                </div>
            </li>
        )
    }
}

export default TodoItems
