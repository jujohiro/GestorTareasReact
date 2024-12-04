import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const taskContext = createContext();


const task = [
    { id: uuidv4(), title: 'Tarea Ejemplo 1', description: 'Descripcion pendiente 1', status: false },
    { id: uuidv4(), title: 'Tarea Ejemplo 2', description: 'Descripcion pendiente 2', status: true },
    { id: uuidv4(), title: 'Tarea Ejemplo 3', description: 'Descripcion pendiente 3', status: true },
    { id: uuidv4(), title: 'Tarea Ejemplo 4', description: 'Descripcion pendiente 4', status: true },
];


export const TaskProvider = ({ children }) => {
    const [tasks, setTask] = useState(task);
    const [filterTasks, setFilter] = useState(task);
    const [pendingTasks,setPending] = useState(0);
    const [doneTasks, setDone] = useState(0);

    const updateTaksStatus = (taskId, newStatus)=>{
        setTask(prevTasks => {
            const updatedTasks = prevTasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            );
            const sortedTasks = sortTasks(updatedTasks);
            setFilter(sortedTasks); 
            return sortedTasks;
        });
    }

  

  const sortTasks = (tasks) => {
      return tasks.sort((a, b) => {
          if (a.status === b.status) return 0;
          return a.status ? 1 : -1; 
      });
  };

   
   

    return (
        <taskContext.Provider value={{
            tasks,
            setTask,
            filterTasks,
            setFilter,
            pendingTasks,
            setPending,
            doneTasks, 
            setDone,
            updateTaksStatus
        }}>
            {children} 
        </taskContext.Provider>
    );
};