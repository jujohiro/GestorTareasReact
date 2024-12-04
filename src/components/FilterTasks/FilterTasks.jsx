import { useContext } from 'react';
import { taskContext } from '../Context/Context';
import './FilterTasks.css';


export const FilterTasks = () => {
  const context = useContext(taskContext);

  const handleFilters = (event) => {
    let currentOption = event.target.value;

    if (currentOption === 'Pendientes') {
      context.setFilter(context.tasks.filter(task => !task.status));
    } else if (currentOption === 'Realizadas') {
      context.setFilter(context.tasks.filter(task => task.status));
    } else {
      context.setFilter(context.tasks);
    }
  };

  return (
    <div className='container-filters'>
      <label>Filtrar por</label>
      <select onChange={handleFilters}>
        <option value="Todas" className='opt opt1'>Todas</option>
        <option value="Pendientes" className='opt opt2'>Pendientes</option>
        <option value="Realizadas" className='opt opt3'>Realizadas</option>
      </select>
    </div>
  );
};
// esta bien como el video