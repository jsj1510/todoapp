import React from 'react'
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = ({ todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoItem 
                todo ={todo}
                key={todo.i} 
                onCheckToggle={onCheckToggle}
                onInsertToggle={onInsertToggle}
                onChangeSelectedTodo={onChangeSelectedTodo}
                 />
            ))}
        </div>
    );
};

export default TodoList;
