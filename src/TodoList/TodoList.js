import React, { Component } from 'react';
import TodoListItem from './TodoListItem.js';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        };
        this.add = this.add.bind(this);
    }

    add() {
        const list = this.state.list;
        list.push(<TodoListItem key={list.length+1} />);
        this.setState({ list });
    }

    render() {
        return (
        <div>
            <ul>
                {this.state.list}
            </ul>
            <button onClick={this.add}>Add</button>
        </div>
        );
    }
}

export default TodoList;
