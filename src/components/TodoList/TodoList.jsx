import { Component } from "react";
import './TodoList.scss'

export function TodoList ({tasks, changeComplated, deleteFunk}) {
    return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <li className="tasks-item" key={task.id} id={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => changeComplated(task.id)}
          />
          <p className={task.completed ? "completed" : ""}>{task.text}</p>
          <button
            className="btn"
            onClick={() => deleteFunk(task.id)}
          >
            𝖉𝖊𝖑𝖊𝖙𝖊 𝖙𝖆𝖘𝖐
          </button>
        </li>
      ))}
    </ul>
        )
}