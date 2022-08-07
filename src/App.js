import React, { useState, useCallback } from 'react';
import Children1 from './Children1';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [language, setLanguage] = useState('en');
  const addTask = useCallback((newTask) => {
    setTasks((prev) => [
      ...prev,
      {
        id: prev?.length > 0 ? prev[prev.length - 1]?.id + 1 : 1,
        name: newTask,
      },
    ]);
  }, []);
  const handleToggle = () => {
    setLanguage((pl) => (pl == 'en' ? 'fr' : 'en'));
  };

  return (
    <div>
      <section>
        <h1>Today's Task</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task?.id}>{task?.name}</li>
          ))}
        </ul>
      </section>
      <Children1 addTask={addTask} />
      <button onClick={handleToggle}>
        Change Language to "{language == 'en' ? 'Spanish' : 'English'}"
      </button>
    </div>
  );
}
