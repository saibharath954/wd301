import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
    tasks: TaskItem[];
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task) => {
    console.log("Task data:", task); // Check if `id` is present

    return (
      <Task
        key={task.id} 
        item={task}
        removeTask={() => {}}
      />
    );
  
  });
  return <>{list}</>;
};

export default TaskList;
