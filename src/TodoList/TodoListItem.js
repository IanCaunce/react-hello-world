import React, { Component } from 'react';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: true,
            value: ''
        };
        this.add = this.add.bind(this);
        this.labelOnClick = this.labelOnClick.bind(this);
        this.inputOnChange = this.inputOnChange.bind(this);
    }

    add(e) {
        if (e.key === 'Enter') {
            this.setState({
                editable: false,
                value: this.input.value
            });
        }
    }

    renderChild() {
        if (this.state.editable) {
            return (
                <input type="text" value={this.state.value} onKeyPress={this.add} onChange={this.inputOnChange} ref={ref => this.input = ref} />
            );
        }
        return (<span onClick={this.labelOnClick}>{this.state.value}</span>);
    }

    inputOnChange(e){
        this.setState({
            value: e.target.value
        });
    }

    labelOnClick(){
        this.setState({
            editable: true
        }, () => {
            this.input.focus();
        });
    }

    render() {
        return (
            <li>
                {this.renderChild()}
            </li>
        );
    }
}

export default TodoListItem;
