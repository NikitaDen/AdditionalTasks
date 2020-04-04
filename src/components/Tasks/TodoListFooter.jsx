import * as React from "react";


class TodoListFooter extends React.Component {
    state = {
        isHidden: false,
        filterValue: 'All'
    };

    onHideFiltersClick = () => {
        this.setState({isHidden: true})
    };

    onShowFiltersClick  = () => {
        this.setState({isHidden: false})
    };

    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">

                {this.state.isHidden ? <button className={'button button--hide'} onClick={this.onShowFiltersClick}>show</button> :
                    <>
                    <button onClick={() => {this.props.changeFilter("All")}} className={`button button--todo ${classForAll}`}>All</button>
                    <button onClick={() => {this.props.changeFilter("Completed")}} className={`button button--todo ${classForCompleted}`}>Completed</button>
                    <button onClick={() => {this.props.changeFilter("Active")}} className={`button button--todo ${classForActive}`}>Active</button>
                    <button className={'button button--hide'} onClick={this.onHideFiltersClick}>hide</button>
                    </>
                }
            </div>
        )
    }
}

export default TodoListFooter;