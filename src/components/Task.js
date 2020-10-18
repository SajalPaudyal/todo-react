import React, { useContext } from 'react'
import {taskContext} from './TaskContextProvider'

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(taskContext)
    return (
       <li className='task-title' style={{marginTop:'30px'}}>
           <span  >{task.title}</span>
           <div>
               <button className='delete' onClick={()=>removeTask(task.id)}>Delete</button>
               <button className='edit' onClick={()=>findItem(task.id)}>Edit</button>
           </div>
       </li>
    )
}

export default Task
