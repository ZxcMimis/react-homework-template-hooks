import { useState } from "react";
import './TodoEditor.scss'

export function TodoEditor({ addTask }) {
    // state = {
    //     textValue: '',
    // }

    const [textValue, setTextValue] = useState("")


  const textValueChange = (e) => {
    setTextValue(e.target.value);
  };

    // submit = (e) => {
    //     e.preventDefault()
    //     this.props.addTask(this.state.textValue);
    // }

    const submit = (e) => {
        e.preventDefault();
        if (!textValue.trim()) return; 
        addTask(textValue);
        setTextValue(""); 
    };


return (
    <form className="form" onSubmit={submit}>
      <h2>𝕯𝖔𝖉𝖆𝖙𝖎 𝖓𝖔𝖛𝖚 𝖙𝖆𝖘𝖐𝖚</h2>
      <input
        className="todo-input"
        type="text"
        value={textValue}
        onChange={textValueChange}
      />
      <button className="todo-btn" type="submit">
        𝖆𝖉𝖉 𝖙𝖆𝖘𝖐
      </button>
    </form>
  );

}