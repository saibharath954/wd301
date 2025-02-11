//import React, { useEffect } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
    const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks",{
      tasks: [],
    });

    const addTask = (task: TaskItem) => {
      const newTask = { ...task, id: crypto.randomUUID() };
      setTaskAppState({ tasks: [...taskAppState.tasks, newTask] });
    };

    return (
      <div>
        <div className="flex flex-col justify-center items-center py-2">
          <h1 className="text-3xl py-3 font-bold text-slate-700">
            Smarter Tasks
          </h1>
          <h1 className="text-lg mb-7 text-slate-600">
            A beautiful task planner
          </h1>
        </div>
        <div className="container max-w-4xl  mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-4">
              <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
                Pending
              </h1>
              <TaskForm addTask={addTask} />
              <TaskList tasks={taskAppState.tasks} setTaskAppState={setTaskAppState} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default TaskApp;
