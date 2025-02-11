import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  setTaskAppState: (newState: { tasks: TaskItem[] }) => void;
}

const TaskList = ({ tasks, setTaskAppState }: Props) => {
  const removeTask = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTaskAppState({ tasks: newTasks }); // Update parent state & localStorage
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <Task key={task.id} item={task} removeTask={removeTask} />
        ))
      )}
    </div>
  );
};

export default TaskList;
