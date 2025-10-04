import { useState } from "react";
import './App.css';

import toDoData from './todo.json'
import { TodoList } from './components/TodoList/TodoList';
import { TodoEditor } from './components/TodoEditor/TodoEditor';
import { Info } from './components/Info/Info';
import { Filter } from './components/Filter/Filter';

const App = ( ) => {
  // state = {
  //   todos: toDoData,
  //   filter: '',
  // }

  const [todos, useTodos] = useState([])
  const [filter, useFilter] = useState("")

  changeCompleted = (changedElId) => {
    
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(task => {
        if (task.id === changedElId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return { todos: updatedTodos };
    });
  }


  deleteTask = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(task => task.id !== id);
      return { todos: updatedTodos };
    });
  }

  addTask = (task) => {
    const newTask = {
      text: task,
      id: `id-${this.state.todos.length + 1}`,
      completed: false
    }
    this.setState(prevState => ({
      todos: [...prevState.todos, newTask]
    }));
  }

  filteredTask = (contact) => {
    this.setState({ filter: contact })
  }

  filteredTasks = () => {
    if (!this.state.filter.toLowerCase()) {
      return this.state.todos;
    }
    return this.state.todos.filter(task =>
      task.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  }

  const filteredTasks = this.filteredTasks();

    return (
      <div className="App">
        <Info data={this.state.todos} />
        <TodoEditor addTask={this.addTask} />
        <Filter filteredTask={this.filteredTask} />
        <TodoList tasks={filteredTasks} changeComplated={this.changeCompleted} deleteFunk={this.deleteTask} addToStorage={this.addToStorage} />
      </div>
    );
}

export default App;