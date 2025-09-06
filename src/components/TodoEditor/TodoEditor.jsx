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
                <h2>Додати нову таску</h2>
                <input
                    type="text"
                    value={this.state.textValue}
                    onChange={this.textValueChange}
                />
                <button type="submit">add task</button>
            </form>
        );
    }
}