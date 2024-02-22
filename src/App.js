import React from "react";
import { TaskCounter } from "./components/TaskCounter";
import { TaskItem } from "./components/TaskItem";
import { TaskSearch } from "./components/TaskSearch";
import { TaskList } from "./components/TaskList";
import { CreateTaskButton } from "./components/CreateTaskButton";

const estilos = {
  border: " 15px solid rgb(29 85 100 / 55%)",
  fontFamily: "PT Serif",
};
const defaultTaks = [
  { text: "Estudiar en Platzi", completed: true },
  { text: "Nadar un rato", completed: false },
  { text: "Completar clase de Duolingo", completed: false },
  { text: "Disfrutar del hogar", completed: false },
  { text: "Trabajar en el cole", completed: true },
];

function App() {
  const [tasks, setTasks] = React.useState(defaultTaks);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTask = tasks.filter((task) => task.completed).length;

  const totalTask = tasks.length;
  const searchedTask = tasks.filter((task) => {
    const noTildes = (text) => {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const taskText = noTildes(task.text.toLowerCase());
    const searchText = noTildes(searchValue.toLowerCase());
    return taskText.includes(searchText);
  });
  const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks[taskIndex].completed = true;
    setTasks(newTasks);
  };
  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks.splice(taskIndex, 1);
    // Método splice me pide índice donde voy a eliminar algo, a la derecha pongo cuántos elementos del array elimino
    setTasks(newTasks);
  };
  console.log("los usuarios quieren " + searchValue);
  return (
    <div style={estilos}>
      <TaskCounter completed={completedTask} total={totalTask} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TaskList>
        {/* searchValue={searchValue} setSearchValue={setSearchValue} */}
        {searchedTask.map((task) => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TaskList>
      <CreateTaskButton />
    </div>
  );
}

export default App;
