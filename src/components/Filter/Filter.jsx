import { Component } from "react";

export class Filter extends Component {
    state = {
        filter: ''
    }
    filterTasks = () => {
         this.props.filteredTask(this.state.filter)
    }
    render(){
        return <>
        <p>фільтр по імені</p>
        <input type="text" onChange={(e) => this.setState({ filter: e.target.value }, () => this.filterTasks())}/>
        </>
    }
}