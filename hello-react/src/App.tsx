import React from 'react';
import './App.css'
import TaskCard from './TaskCard';

function App() {
  return (
    <div className='flex flex-col items-center'>
      <div>
        <h1 className="font-bold text-4xl text-violet-600">Smarter Tasks</h1>
      </div>
      <div className='flex justify-center mt-8 gap-4'>
        <div className='w-1/2 p-3 border border-2 border-black rounded-xl'>
          <h1 className='text-3xl font-bold p-1 text-center text-gray-600'>Pending</h1>
          <TaskCard title="Build the website with static content" dueDate="11th April" assigneeName="Ravi K"/>
          <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Suresh M"/>
        </div>
        <div className='w-1/2 border border-2 p-3 rounded-xl border-black'>
          <h1 className='text-3xl font-bold p-1 text-center text-gray-600'>Done</h1>
          <TaskCard title="Design the mockup" completedAtDate="10th January" assigneeName="Ravi K"/>
          <TaskCard title="Get the approval from principal" completedAtDate="15th January" assigneeName="Ravi K"/>
        </div>
      </div>
    </div>
  );
}

export default App
