import React, { useContext } from 'react'
import profile from '../../../images/ImgProfile.jpeg'
import { taskContext } from "../../Context/Context"
import { FilterTasks } from '../../FilterTasks/FilterTasks'
import { ItemTask } from "../../ItemTask/ItemTask"
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks"
import { Header } from "../../Layouts/Header/Header"
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks'
import { Main } from "../../Layouts/Main/Main"
import { NewTask } from "../../NewTask/NewTask"



export const Home = () => {

  const context =useContext(taskContext)


  return (
  <>
<Header>
  <div className='container-header-1'>
    <div className='container-title'>
      <h1 className='title-header'>Gestor de Tareas</h1>
    </div>
    <div className='container-img'>
      <img className='img.profile' src= {profile} alt="Imagen de perfil" />
    </div>
  </div>
      <NewTask />
      <InfoTasks />
      <FilterTasks />
      </Header>
        <Main>
            <ContainerTasks>
                {
                  context.filterTasks.map(task => (
                    <ItemTask key={task.id} idTask={task.id} content={task.description} titleTask={task.title} />
                  ))
                  
                }
            </ContainerTasks>
        </Main>
  </>
  )
}
