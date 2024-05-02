import lixeira from "./assets/images/lixeira.png";

export default function Tasks({ item, onClick, onToggle }) {
  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        value={item.completed}
        onChange={() => onToggle(item.id)}
      />
      <span className={`task ${item.completed ? "completed" : ""}`}>
        {item.task}
      </span>
      <button className="btn-lixeira" onClick={() => onClick(item.id)}>
        <img src={lixeira} alt="Lixeira" />
      </button>
    </li>
  );
}
