import './task-list-item.css'

import React, {Component} from 'react';

class TaskListItem extends Component {
    componentDidMount() {
        this.setState((st)=>{
        return{
            isComplete: this.props.isCompleted
        }
    })
    }
    state = {
        isComplete : false
    }
    onClickText = ()=>{
        this.setState((stat)=>{
            this.props.onChecked(!this.state.isComplete)
            return {isComplete: !this.state.isComplete}
        })
    }

    render() {
        const itemStyle = {
            textDecoration: this.state.isComplete
                ? 'line-through'
                : 'none'
        }
        const {text, onDeleted} = this.props
        return (<span className="todo-list-item">
        <span
            className='todo-list-item-text'
            style={itemStyle}
            onClick={this.onClickText}
        >
            {text}
        </span>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm delete"
                    onClick={onDeleted}
                >
                    Delete
                </button>
    </span>
        )
    }
}

export default TaskListItem