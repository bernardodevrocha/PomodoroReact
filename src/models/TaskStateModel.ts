import { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[]; // histórico, MainForm
  secondsRemaining: number;
  formatedSecondsRemaining: string;
  activeTask: TaskModel[] | null;
  currentyCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  }
}