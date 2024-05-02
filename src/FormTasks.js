import { useState } from "react";

export default function FormTasks({ onAddTask }) {
  const [inputTask, setInputTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputTask) return;

    const newTask = { id: Date.now(), task: inputTask, completed: false };

    onAddTask(newTask);

    setInputTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Digite a tarefa a ser executada</label>
      <input
        type="text"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button className="btn-add">Adicionar</button>
    </form>
  );
}
