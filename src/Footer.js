export default function Footer({ task }) {
  const lengthTask = task.length;
  const lengthTaskCompleted = task.filter(
    (item) => item.completed === true
  ).length;
  const percentageTaskCompleted = Number(
    ((lengthTaskCompleted / lengthTask) * 100).toFixed(2)
  );
  //   console.log(percentageTaskCompleted);

  if (lengthTask === 0) {
    return <footer>Você ainda não adicionou nenhuma tarefa</footer>;
  }

  return percentageTaskCompleted === 100 ? (
    <footer>Você concluiu toda(s) as {lengthTask} tarefa(s). Parabens!</footer>
  ) : (
    <footer>
      Você têm {lengthTask} tarefa(s) e {lengthTaskCompleted} (
      {percentageTaskCompleted}%) já foram concluída(s)
    </footer>
  );
}
