import React, { createContext, useEffect, useState } from 'react'
import uuid from 'uuid';


export const taskContext = createContext()

const TaskContextProvider = (props) => {

    const initialState =JSON.parse( localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)
    const [editItem , setEditItem] = useState(null)

    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])

    const addTask = (title) =>{
        setTasks([...tasks, {title, id:uuid()}])
    }

    const removeTask = (id) =>{
        setTasks(tasks.filter( task => task.id !== id))
    }

    const clearList = () =>{
        setTasks([])
    }

    const findItem  = (id) =>{
        const item  = tasks.find(task => task.id === id)
        setEditItem(item)
    }

    const editTask = (title, id) =>{
        const newTasks =  tasks.map(task =>(task.id === id? {title, id}: task))

        setTasks(newTasks)
        setEditItem(null)
    }

    return (
        <taskContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask,editItem}}>
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskContextProvider
