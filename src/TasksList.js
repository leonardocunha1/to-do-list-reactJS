import { useState } from "react";
import Tasks from "./Tasks";

export default function TasksList({
  task,
  onDeleteTask,
  onResetTask,
  onToggleCompletedTask,
}) {
  let tarefas;
  const [order, setOrder] = useState("");

  function handleResetOrder() {
    setOrder("");
  }

  if (order === "default" || order === "") {
    tarefas = task;
  }

  // Essas ordenações foram feitas com ajuda do GPT
  if (order === "tasksComplete") {
    tarefas = task
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));
  }

  if (order === "alphabeticalOrder") {
    tarefas = task.slice().sort((a, b) => a.task.localeCompare(b.task));
  }

  return (
    <>
      <ul>
        {tarefas.map((item, i) => (
          <Tasks
            item={item}
            key={item.id}
            onClick={onDeleteTask}
            onToggle={onToggleCompletedTask}
          />
        ))}
      </ul>
      {tarefas.length > 0 && (
        <div className="task-options">
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option disabled value="" hidden>
              Como você quer ordenar as tarefas?
            </option>
            <option value="default">Ordem de entrada (padrão)</option>
            <option value="tasksComplete">Tarefas Completas</option>
            <option value="alphabeticalOrder">Ordem Alfabética</option>
          </select>
          <button
            className="btn-reset"
            onClick={() => {
              onResetTask();
              handleResetOrder();
            }}
          >
            Reset
          </button>
        </div>
      )}
    </>
  );
}
