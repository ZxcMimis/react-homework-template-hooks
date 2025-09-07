import { Component } from "react";
import './TodoEditor.scss'

export class TodoEditor extends Component {
    state = {
        textValue: '',
    }

    textValueChange = (e) => {
        this.setState({ textValue: e.target.value });
    }

    submit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.textValue);
    }

    render() {
        return (
            <form className="form" onSubmit={this.submit}>
                <h2>𝕯𝖔𝖉𝖆𝖙𝖎 𝖓𝖔𝖛𝖚 𝖙𝖆𝖘𝖐𝖚</h2>
                <input className="todo-input"
                    type="text"
                    value={this.state.textValue}
                    onChange={this.textValueChange}
                />
                <button className="todo-btn" type="submit">𝖆𝖉𝖉 𝖙𝖆𝖘𝖐</button>
            </form>
        );
    }
}