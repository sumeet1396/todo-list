import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoInputs extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            todos: '',
            date: '',
            bgColor: '',
            isCompleted: false
        }
    }

    inputChangedHandler = (event) => {
        const {name, value} = event.target
        const textRegex = /^[A-Za-z ]{3,30}$/;
        const colors = ["red","blue","green","yellow"];
        const randomColor = colors[Math.floor(Math.random()*colors.length)]; 

        if (textRegex.test(value)) {
            this.setState({ 
                [name]: value,
                date: new Date().toLocaleString(),
                bgColor: randomColor
            
            });
        }
    }

    addTodoHandler = e => {
        e.preventDefault();
        this.props.addTodoHandler(this.state);
        this.setState({id: 0, todos: '', date: '', bgColor: '', isCompleted: false});
    }

    render() {
        
        return (
            <form className="todo-form" onSubmit={this.addTodoHandler.bind(this)} >
                <input id="todo-input" type="text" className="input-control" name="todos" onChange={this.inputChangedHandler}/>
                <button type="submit" className="custom-btn add-btn" title="Add Todos"><FontAwesomeIcon icon="paper-plane" /></button>
            </form>
        )
    }
}

export default TodoInputs
