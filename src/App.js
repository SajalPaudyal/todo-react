import React, { createContext } from 'react';
import './App.css';
import TaskContextProvider from './components/TaskContextProvider';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
export const userContext = createContext()

function App() {




  return (
    <TaskContextProvider>
      <div className='wholesome'>
    <div className='all-tasks'>
    <h1>My TO-DO List</h1>
      <TaskForm/>
      <TaskList/>
    </div>
    </div>
    </TaskContextProvider>
  );
}

export default App;
