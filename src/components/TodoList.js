import React from "react";
import {connect} from 'react-redux';
import {TodoListItem} from "./TodoListItem";
import {NewTodoForm} from "./NewTodoForm";
import {getCompletedTodos, getIncompleteTodos} from "../selectors/todosSelectors";

// const todos = [
//     {text:'go to store',isCompleted: false},
//     {text:'wash car',isCompleted: false},
//     {text:'fold clothes',isCompleted: true},
// ]

export const TodoListBase = ({incompleteTodos, completedTodos}) => (
    <div>
        <h1>My Todos</h1>
        <NewTodoForm/>
        <h2>Incomplete:</h2>
        {incompleteTodos.map(todo => (
            <TodoListItem todo={todo} key={todo.text}/>
        ))}
        <h2>Completed:</h2>
        {completedTodos.map(todo => (
            <TodoListItem todo={todo} key={todo.text}/>
        ))}
    </div>
);

const mapStateToProps= state => ({
    incompleteTodos: getIncompleteTodos(state),
    completedTodos: getCompletedTodos(state),
});

export const TodoList = connect(mapStateToProps)(TodoListBase);