import './styles/theme.css';
import './styles/global.css';
// import { AboutPomodoro } from './pages/AboutPomodoro';
import { Home } from './pages/Home';
import { useState } from 'react';
import { TaskStateModel } from './models/TaskStateModel';
// import { NotFound } from './pages/NotFound';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config:{
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15
  }
}

export function App(){
  const [state, setState] = useState(initialState);

  console.log("APP", state);

  return <Home />;
}