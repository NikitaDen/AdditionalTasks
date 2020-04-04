import * as React from "react";
import TodoListTask from "./TodoListTask/TodoListTask";


class TodoListTasks extends React.Component {
    render = () => {
        return (
            <div className="todoList-tasks">
                {this.props.tasks.map(task => <TodoListTask key={task.id} dates={task.dates} changePriority={this.props.changePriority} deleteTask={this.props.deleteTask} id={task.id} task={task} changeStatus={this.props.changeStatus} priority={task.priority} title={task.title} isDone={task.isDone}/>)}
            </div>
        )
    }
}

export default TodoListTasks;