import { Component } from "react";
import './Info.scss'

export class Info extends Component {
    render() {
        return(
            <ul className="info-list">
                <li className="info-item">
                    <p>Кількість всіх завдань:</p>
                    <span>{this.props.data.length}</span>
                </li>
                <li className="info-item">
                <p>Кількість виконаних завдань:</p>
                <span>{this.props.data.filter(task => task.completed).length}</span>
                </li>
            </ul>
        )
    }
}