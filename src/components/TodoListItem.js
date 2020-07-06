import React from "react";
import {connect} from 'react-redux';
import {deleteTodo, markTodoAsCompleted} from "../actions/todosActions";

export const TodoListItemBase = ({todo, onClickDelete, onClickMarkCompleted}) => (
    <div>
        <h3>{todo.text}</h3>
        {todo.isCompleted ? <p>Complete! </p> : null}
        {todo.isCompleted
            ? <button onClick={() => onClickDelete(todo.text)}>Delete Item</button>
            : <button onClick={() => onClickMarkCompleted(todo.text)}>Mark as Completed</button>}
    </div>
);

const mapDispatchToProps = dispatch => ({
    onClickDelete: text => dispatch(deleteTodo(text)),
    onClickMarkCompleted: text => dispatch(markTodoAsCompleted(text)),
});

export const TodoListItem = connect(null, mapDispatchToProps)(TodoListItemBase);