import React, { useContext, useEffect, useState } from 'react'
import { taskContext } from './TaskContextProvider'


const TaskForm = () => {

    const { addTask, clearList, editItem, editTask } = useContext(taskContext)

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (editItem === null) {
            e.preventDefault()
            addTask(title)
            setTitle('')
        }else{
             editTask(title, editItem.id)
             
        }

    }

    useEffect(() => {
        if (editItem !== null) {
            setTitle(editItem.title)
        }
        else {
            setTitle('')
        }
    }, [editItem])

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    value={title}
                    onChange={handleChange}
                    type='text'
                    placeholder='add task...'
                    required
                />

                <button className='add-btn' type='submit'>{editItem?'Edit Task':'Add task'}</button>
                <button onClick={() => clearList()}>Clear All</button>
            </form>
        </div>
    )
}

export default TaskForm
