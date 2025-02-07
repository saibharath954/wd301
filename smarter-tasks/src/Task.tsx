import { Link } from "react-router-dom";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  item: TaskItem ;
  removeTask: (task: TaskItem) => void;
}
const Task = (props: TaskProps) => {
  const { item, removeTask } = props;
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <Link to={`/tasks/${item.id}`}>
            <h2 className="text-base font-bold my-1">{item.title}</h2>
          </Link>
          <p className="text-sm text-slate-500">{item.dueDate}</p>
          <p className="text-sm text-slate-500">
            Description: {item.description}
          </p>
        </div>

        <button className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => removeTask(item)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Task;

/*import "./TaskCard.css";
interface TaskItem {
    title: string;
    description: string;
    dueDate: string;
}

const Task = (props: TaskItem) => {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">{props.dueDate}</p>
        <p className="text-sm text-slate-500">Description: {props.description}</p>
      </div>
    );
  };

export default Task;*/