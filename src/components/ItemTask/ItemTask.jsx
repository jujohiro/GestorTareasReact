import React, { useContext } from 'react';

import { taskContext } from '../Context/Context';
import './ItemTask.css';

export const ItemTask = ({ idTask, content, titleTask }) => {
  const { tasks, updateTaksStatus } = useContext(taskContext);

  const task = tasks.find(task => task.id === idTask);

  const handleCheckboxChange = () => {
    // Actualizamos el estado de la tarea
    updateTaksStatus(idTask, !task.status);
  };

  return (
    <li id={idTask} className={task.status ? "item-task checked" : "item-task"}>
      <div className={task.status ? "circle-status circle-green" : "circle-status"}></div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
      <input
        type="checkbox"
        checked={task.status}
        onChange={handleCheckboxChange}
      />
    </li>
  );
};