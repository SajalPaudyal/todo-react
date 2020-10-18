import React, { useContext } from 'react'
import Task from './Task'
import {taskContext} from './TaskContextProvider'

const TaskList = () => {

    const {tasks} = useContext(taskContext)


    return (
        <div className='tasks'>
            {tasks.length?( <ul>
                {tasks.map((task)=>{
                    return <Task task={task} key={task.id} />
                })}
            </ul>):(
                <div> No  Tasks</div>
            )}
           
            
        </div>
    )
}

export default TaskList
