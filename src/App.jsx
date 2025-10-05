import { useState } from "react";
import './App.css';

import toDoData from './todo.json';
import { TodoList } from './components/TodoList/TodoList';
import { TodoEditor } from './components/TodoEditor/TodoEditor';
import { Info } from './components/Info/Info';
import { Filter } from './components/Filter/Filter';

const App = () => {
  const [todos, setTodos] = useState(toDoData);
  const [filter, setFilter] = useState("");

  const changeCompleted = (changedElId) => {
    setTodos(prevTodos =>
      prevTodos.map(task =>
        task.id === changedElId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(prevTodos => prevTodos.filter(task => task.id !== id));
  };

  const addTask = (task) => {
    const newTask = {
      text: task,
      id: `id-${todos.length + 1}`,
      completed: false
    };
    setTodos(prevTodos => [...prevTodos, newTask]);
  };

  const filteredTask = (contact) => {
    setFilter(contact);
  };

  const filteredTasks = () => {
    if (!filter.trim()) {
      return todos;
    }
    return todos.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className="App">
      <Info data={todos} />
      <TodoEditor addTask={addTask} />
      <Filter filteredTask={filteredTask} />
      <TodoList 
        tasks={filteredTasks()} 
        changeComplated={changeCompleted} 
        deleteFunk={deleteTask} 
      />
    </div>
  );
};

export default App;
