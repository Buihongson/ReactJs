import React, { Component } from 'react';
import './Todoitems.css';

class TodoItem extends Component {
    render() {
        const { item } = this.props; // destructuring
        let className = "TodoItem";
        if (item.isComplete) {
            className += " TodoItem-complete";
        }
        return (
            <div className={className}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;