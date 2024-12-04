import React, { useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { taskContext } from '../Context/Context';
import './NewTask.css';

export const NewTask = () => {

  const context = useContext(taskContext);


  const [titleTask, setTitleTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');

  const txtTitle = useRef(null);
  const txtDescription = useRef(null);

 
  const handleTitleTask = (event) => setTitleTask(event.target.value);
  const handleDescriptionTask = (event) => setDescriptionTask(event.target.value);

  const handleCreateTask = (event) => {
    event.preventDefault();
    if (titleTask.trim() && descriptionTask.trim()) {
      const newTask = {
        id: uuidv4(),
        title: titleTask,
        description: descriptionTask,
        status: false,
      };

      // Update tasks in context
      context.setTask((prevTasks) => [...prevTasks, newTask]);
      context.setFilter((prevFilterTasks) => [...prevFilterTasks, newTask]);

      // Clear input fields
      setTitleTask('');
      setDescriptionTask('');
    }
  };

  // Render
  return (
    <form className='frm-task' onSubmit={handleCreateTask}>
      <fieldset>
        <input
          ref={txtTitle}
          value={titleTask}
          onChange={handleTitleTask}
          id='txt-title'
          placeholder='Ej: Aseo ambiente'
          type='text'
        />
      </fieldset>
      <fieldset>
        <label> Descripción de la tarea</label>
        <input
          ref={txtDescription}
          value={descriptionTask}
          onChange={handleDescriptionTask}
          id='txt-description'
          placeholder='Ej: Realizar el aseo del ambiente'
          type='text'
          maxLength={100}
        />
      </fieldset>
      <button type='submit' className='btn-new-task'>Crear nueva Tarea</button>
    </form>
  );
};
