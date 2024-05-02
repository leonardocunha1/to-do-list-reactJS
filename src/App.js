import { useState } from "react";
import Header from "./Header";
import FormTasks from "./FormTasks";
import TasksList from "./TasksList";
import Footer from "./Footer";

export default function App() {
  // array onde as tarefas são armazenadas
  // aqui foi utilizado lifting state up, pois se eu colocasse o array das tarefas no componente FormTasks ou no TasksLists (que são irmãos) o fluxo de dados não aconteceria, pois só acontece entre pai-filho e não irmão-irmão
  const [task, setTask] = useState([]);

  // adicionando tarefas
  function handleAddTask(item) {
    setTask((items) => [...items, item]);
  }

  // apagando tarefas
  function handleDeleteTask(id) {
    setTask((items) => items.filter((item) => item.id !== id));
  }

  // resentando tarefas
  function handleResetTask() {
    setTask([]);
  }

  // alternando o valor da propriedade completed da tarefa quando o checkbox é alterado
  function ToggleCompletedTask(id) {
    setTask((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <FormTasks task={task} setTask={setTask} onAddTask={handleAddTask} />
      <TasksList
        task={task}
        onDeleteTask={handleDeleteTask}
        onResetTask={handleResetTask}
        onToggleCompletedTask={ToggleCompletedTask}
      />
      <Footer task={task} />
    </div>
  );
}

// function Header() {
//   return (
//     <>
//       <h1 className="title">To-Do List</h1>;
//       <div className="custom-shape-divider-top-1714657111">
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
//             className="shape-fill"
//           ></path>
//         </svg>
//       </div>
//     </>
//   );
// }

// function FormTasks({ onAddTask }) {
//   const [inputTask, setInputTask] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!inputTask) return;

//     const newTask = { id: Date.now(), task: inputTask, completed: false };

//     onAddTask(newTask);

//     setInputTask("");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Digite a tarefa a ser executada</label>
//       <input
//         type="text"
//         value={inputTask}
//         onChange={(e) => setInputTask(e.target.value)}
//       />
//       <button className="btn-add">Adicionar</button>
//     </form>
//   );
// }

// function TasksList({ task, onDeleteTask, onResetTask, onToggleCompletedTask }) {
//   let tarefas;
//   const [order, setOrder] = useState("");

//   if (order === "default" || order === "") {
//     tarefas = task;
//   }

//   // Essas ordenações foram feitas com ajuda do GPT
//   if (order === "tasksComplete") {
//     tarefas = task
//       .slice()
//       .sort((a, b) => Number(a.completed) - Number(b.completed));
//   }

//   if (order === "alphabeticalOrder") {
//     tarefas = task.slice().sort((a, b) => a.task.localeCompare(b.task));
//   }

//   return (
//     <>
//       <ul>
//         {tarefas.map((item, i) => (
//           <Tasks
//             item={item}
//             key={item.id}
//             onClick={onDeleteTask}
//             onToggle={onToggleCompletedTask}
//           />
//         ))}
//       </ul>
//       {tarefas.length > 0 && (
//         <div className="task-options">
//           <select value={order} onChange={(e) => setOrder(e.target.value)}>
//             <option disabled value="" hidden>
//               Como você quer ordenar as tarefas?
//             </option>
//             <option value="default">Ordem de entrada (padrão)</option>
//             <option value="tasksComplete">Tarefas Completas</option>
//             <option value="alphabeticalOrder">Ordem Alfabética</option>
//           </select>
//           <button className="btn-reset" onClick={onResetTask}>
//             Reset
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// function Tasks({ item, onClick, onToggle }) {
//   return (
//     <li>
//       <input
//         className="checkbox"
//         type="checkbox"
//         value={item.completed}
//         onChange={() => onToggle(item.id)}
//       />
//       <span className={`task ${item.completed ? "completed" : ""}`}>
//         {item.task}
//       </span>
//       <button className="btn-lixeira" onClick={() => onClick(item.id)}>
//         <img src={lixeira} alt="Lixeira" />
//       </button>
//     </li>
//   );
// }

// function Footer({ task }) {
//   const lengthTask = task.length;
//   const lengthTaskCompleted = task.filter(
//     (item) => item.completed === true
//   ).length;
//   const percentageTaskCompleted = Number(
//     ((lengthTaskCompleted / lengthTask) * 100).toFixed(2)
//   );
//   //   console.log(percentageTaskCompleted);

//   if (lengthTask === 0) {
//     return <footer>Você ainda não adicionou nenhuma tarefa</footer>;
//   }

//   return percentageTaskCompleted === 100 ? (
//     <footer>Você concluiu toda(s) as {lengthTask} tarefa(s). Parabens!</footer>
//   ) : (
//     <footer>
//       Você tem {lengthTask} tarefa(s) e {lengthTaskCompleted} (
//       {percentageTaskCompleted}%) já foram concluída(s)
//     </footer>
//   );
// }
