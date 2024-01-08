import { TaskCounter } from "./components/TaskCounter";
import { TaskItem } from "./components/TaskItem";
import { TaskSearch } from "./components/TaskSearch";
import { TaskList } from "./components/TaskList";
import { CreateTaskButton } from "./components/CreateTaskButton";

const estilos={
  border: " 15px solid rgb(29 85 100 / 55%)",
  fontFamily: "PT Serif",
}
const defaultTaks = [
  { text: "Estudiar en Platzi", completed: true },
  { text: "Nadar un rato", completed: false },
  { text: "Completar clase de Duolingo", completed: false },
  { text: "Disfrutar del hogar", completed: false },
];

function App() {
  return (
    <div style={estilos}>
      <TaskCounter total={16} completed={25} />
      <TaskSearch />
      <TaskList>
        {defaultTaks.map((task) => (
          <TaskItem key={task.text} text={task.text} completed={task.completed}/>
        ))}
      </TaskList>
      <CreateTaskButton />
    </div>
  );
}

export default App;
