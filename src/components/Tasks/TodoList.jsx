import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import Loading from "../Common/Loading";
import {connect} from "react-redux";
import {setLoading} from "../../redux/todo-reducer";

class TodoList extends React.Component {
    state = {
        tasks: [],
        filterValue: 'All',
    };

    componentDidMount() {
        this.setState({
            ...this.state,
            tasks: JSON.parse(localStorage.getItem('tasks')) || [],
        });
        this.toggleLoading();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    toggleLoading = () => {
        setTimeout(() => this.props.setLoading(false), 3000);
    };

    addTask = (newTitle) => {
        let task = {
            title: newTitle,
            isDone: false,
            priority: 'low',
            id: Date.now(),
            dates: {
                created: `Created: ${new Date().toLocaleDateString()}\n`,
                updated: 'Updated: -\n',
                finished: 'Finished: -',
            }
        };

        let newTasks = [...this.state.tasks, task];
        this.setState({tasks: newTasks});
    };

    deleteTask = (id) => {
        let newTasks = this.state.tasks.filter(item => item.id !== id);
        this.setState({...this.state, tasks: [...newTasks]});
    };

    changePriority = (id, priority) => {
        let newTasks = this.state.tasks.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    priority,
                    dates: {
                        ...item.dates,
                        updated: `Updated: ${new Date().toLocaleDateString()}\n`,
                    }
                }
            }
            return item;
        });
        this.setState({
            ...this.state,
            tasks: [...newTasks],
        });
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue,
        })
    };

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(item => {
            if (item !== task) {
                return item;
            } else {
                return {
                    ...item, isDone,
                    dates: !isDone ? {
                        ...item.dates,
                        finished: `Finished: -`,
                        updated: `Updated: ${new Date().toLocaleDateString()}\n`,
                    } : {
                        ...item.dates,
                        updated: `Updated: ${new Date().toLocaleDateString()}\n`,
                        finished: `Finished: ${new Date().toLocaleDateString()}`,
                    }
                }
            }
        });
        this.setState({
            tasks: newTasks
        })
    };

    setNewText = (e) => {
        let text = e.currentTarget.value;
        this.setState({text});
    };

    render = () => {
        return this.props.loading
            ? <Loading/>
            : <div className="todoList">
                <TodoListHeader setNewText={this.setNewText} text={this.state.text} addTask={this.addTask}/>
                <TodoListTasks changePriority={this.changePriority} changeStatus={this.changeStatus}
                               deleteTask={this.deleteTask}
                               tasks={this.state.tasks.filter(task => {
                                   return (this.state.filterValue === "All" && true)
                                       || (this.state.filterValue === "Completed" && task.isDone)
                                       || (this.state.filterValue === "Active" && !task.isDone);
                               })}/>
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
            </div>
            ;
    }
}

let mapStateToProps = (state) => ({
    loading: state.todo.loading,
});

export default connect(mapStateToProps, {setLoading})(TodoList);

