import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoBlock extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            todo: '',
            date: '',
            isCompleted: false
        }
    }

    render() {

        let colors = ["red","blue","green","yellow"];
        let randomColor = colors[Math.floor(Math.random()*colors.length)]; 

        return (
            <ul className="todo-list">
                <TodoItems bgColor={randomColor} />
                <TodoItems bgColor={randomColor}/>
            </ul>
        )
    }
}

export default TodoBlock
