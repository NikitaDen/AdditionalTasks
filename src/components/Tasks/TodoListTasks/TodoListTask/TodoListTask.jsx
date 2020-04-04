import * as React from "react";

class TodoListTask extends React.Component {

    onIsDoneChanged = () => {
        this.props.changeStatus(this.props.task, !this.props.isDone);
    };

    render = () => {
        return (
            <div title={`${this.props.dates.created} ${this.props.dates.updated} ${this.props.dates.finished}`} className={this.props.isDone ? "todoList-task done" : "todoList-task"}>
                <input type="checkbox" onChange={this.onIsDoneChanged} checked={this.props.isDone}/>
                <span>{this.props.title}</span>
                <select onChange={(e) => this.props.changePriority(this.props.id, e.target.value)} value={this.props.priority}>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
                <button className={'button button--delete'} onClick={() => this.props.deleteTask(this.props.id)}>X</button>
            </div>
        )
    }
}

export default TodoListTask;