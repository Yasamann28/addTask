import React, { useState } from 'react';

function Children1({ addTask }) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e?.preventDefault();
    addTask(value);
    setValue('');
  };
  console.log('Re-rendered');

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newTask">New Task</label>
      <input
        id="newTask"
        value={value}
        onChange={(e) => setValue(e?.target?.value)}
        placeholder="Add new task..."
      />
    </form>
  );
}
export default React.memo(Children1);
