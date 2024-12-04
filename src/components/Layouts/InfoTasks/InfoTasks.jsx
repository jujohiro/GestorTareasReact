import { useContext, useEffect } from 'react';
import { taskContext } from '../../Context/Context';
import './infoTasks.css';

export const InfoTasks = () => {
  const { tasks, pendingTasks, doneTasks, setPending, setDone } = useContext(taskContext);

  useEffect(() => {

    const pending = tasks.filter(task => task.status === false);
    const resolved = tasks.filter(task => task.status === true);


    setPending(pending.length);
    setDone(resolved.length);
  }, [tasks, setPending, setDone]);

  return (
    <>
      <h2 className="info-tasks">
        Usted tiene <span className="task-pending">{pendingTasks}</span> pendientes y{' '}
        <span className="task-done">{doneTasks}</span> terminadas.
      </h2>
      <hr />
    </>
  );
};
