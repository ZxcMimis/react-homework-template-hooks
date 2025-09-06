import { Component } from "react";
import './TodoList.scss'

export class TodoList extends Component {

    render() {

        return (
            <ul className="tasks-list">
                {this.props.tasks.map((task) => {
                    return <li className="tasks-item" key={task.id} id={task.id}>
                        <input onChange={() => this.props.changeComplated(task.id)} type="checkbox" checked={task.completed} />
                        <p className={task.completed ? 'completed' : ''}>{task.text}</p>
                        <button onClick={(e) => this.props.deleteFunk(e.target.parentElement.id)}>delete task</button>
                    </li>
                })}
            </ul>
        )
    }
}