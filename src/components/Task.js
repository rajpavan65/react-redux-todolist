import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

function Task() {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const addTask = ()=>{
        const task = inputRef.current.value.trim();
        if(task!==""){
            dispatch(addTodo(task));
            inputRef.current.value="";
        }
    }

    return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={addTask}>Add Task</button>
        </div>
    )

}

export default Task;