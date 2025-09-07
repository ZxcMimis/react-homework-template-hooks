import { Component } from "react";
import './filter.scss'


export class Filter extends Component {
    state = {
        filter: ''
    }

    filterTasks = () => {
        this.props.filteredTask(this.state.filter)
    }

    render() {
        return (
            <div className="box-filter">
                <p className="text-filter">𝕱і𝖑𝖙𝖗-𝖕𝖔-і𝖒𝖊𝖓і</p>
                <input 
                className="input-filter" 
                    type="text" 
                    onChange={(e) => this.setState(
                        { filter: e.target.value }, 
                        () => this.filterTasks()
                    )} 
                />
            </div>
        )
    }
}