import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import Form from "./components/Form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faListAlt);

function App() {
  // state pour stocker ce qui est rentré dans l'input
  const [input, setInput] = useState("");
  // state pour stocker un tableau de tâches
  const [tasks, setTasks] = useState([]);

  // fonction déclenchée lorsqu'on clique sur le bouton 'add task'
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Veuillez rentrer une nouvelle tâches");
    } else {
      let tasksCopy = [...tasks];
      tasksCopy.push({
        title: input.length > 20 ? input.substring(0, 30) + "..." : input,
        done: false,
      });
      setTasks(tasksCopy);
      setInput("");
    }
  };
  // fonction appelée lorsque l'on clique sur une checkbox
  const handleClickCheck = (index) => {
    let tasksCopy = [...tasks];
    // grâce à l'index du .map(), on peut retrouver la tâche concernée dans le tableau "tasks"
    // on modifie la valeur de la clé "done", qui passe de "false" à "true" et inversement
    tasksCopy[index].done = !tasksCopy[index].done;
    setTasks(tasksCopy);
  };

  // fonction appelée lorsque l'on clique sur la poubelle
  const handleClickTrash = (index) => {
    // il faut supprimer l'élément cliqué du tableau "tasks"
    let tasksCopy = [...tasks];
    tasksCopy.splice(tasksCopy.indexOf(tasksCopy[index]), 1);
    setTasks(tasksCopy);
  };

  return (
    <div className="body">
      <Header />
      <div className="container">
        <Task
          handleClickCheck={handleClickCheck}
          handleClickTrash={handleClickTrash}
          handleSubmit={handleSubmit}
          tasks={tasks}
        />
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          input={input}
        />
      </div>
    </div>
  );
}

export default App;
