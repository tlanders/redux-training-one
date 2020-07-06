import React from "react";

export const TodoListItem = ({todo}) => (
    <div>
        <h3>{todo.text}</h3>
        {todo.isCompleted ? <p>Complete! </p> : null}
        {todo.isCompleted
            ? <button>Delete Item</button>
            : <button>Mark as Completed</button>}
    </div>
);