import React from 'react';
import PropTypes from 'prop-types';
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  completedAtDate?: string; //Optional property
  dueDate: string;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    let text = "";
    let color = "";
    if(props.completedAtDate) {
      text = `Completed on: ${props.completedAtDate}`;
      color = "text-green-500";
    }
    else {
      text = `Due on: ${props.dueDate}`;
      color = "text-red-500";
    }
    return(
      <div className='TaskItem'>
        <h2 className={`text-2xl font-medium ${color}`}>{props.title}</h2>
        <p className='text-lg'>{text}</p>
        <p className='text-lg'>Assignee: {props.assigneeName}</p>
      </div>
    );
}
  
// Add PropTypes validation
TaskCard.propTypes = {
    title: PropTypes.string.isRequired,
    completedAtDate: PropTypes.string,
    dueDate: PropTypes.string,
    assigneeName: PropTypes.string.isRequired
};

export default TaskCard;