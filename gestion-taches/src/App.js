import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Ajouter une nouvelle tâche
  const addTask = (text) => {
    if (text.trim() === '') return; // Éviter d'ajouter des tâches vides
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  // Changer l'état d'achèvement d'une tâche
  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1 className="app-title">Gestion des Tâches</h1>
      <AddTask addTask={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      ) : (
        <p className="no-tasks">Aucune tâche pour le moment.</p>
      )}
    </div>
  );
}

export default App;
