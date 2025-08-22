import { createContext, useContext, useState } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
    secondsRemaining: 0,
    formatedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
      workTime: 25,
      shortBreakTime: 5,
      longBreakTime: 15,
    }
}

const initialContextProviderProps = {
  state: initialState,
  setState: () => {}
}

type TaskContextProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export const TaskContext = createContext<TaskContextProps>(initialContextProviderProps);

type TaskContextProviderProps = {
  children: React.ReactNode // Tipo em Typescript que renderiza qualquer tipo de variável
}

export function TaskContextProvider({children}: TaskContextProviderProps){
  const [state, setState] = useState(initialState);
  return <TaskContext.Provider value={{state, setState}}>
           {children}
         </TaskContext.Provider>
}

export function useTaskContext(){
  return useContext(TaskContext);
}