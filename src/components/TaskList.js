import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../actions';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) =>{
    dispatch(deleteTodo(id));
  }

  if (!tasks || tasks.length === 0) {
    return <div>No tasks to display.</div>;
  }

  return (
    <>
    
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={task.id}>
            {task.text}
            <button
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
    </>
  );
}

export default TaskList;
