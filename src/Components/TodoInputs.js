import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoInputs extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <form className="todo-form">
                <input id="todo-input" type="text" className="input-control" name="todos" />
                <button type="submit" className="custom-btn add-btn" title="Add Todos"><FontAwesomeIcon icon="paper-plane" /></button>
            </form>
        )
    }
}

export default TodoInputs
