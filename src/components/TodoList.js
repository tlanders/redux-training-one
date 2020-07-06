import React from "react";
import {connect} from 'react-redux';
import {TodoListItem} from "./TodoListItem";
import {NewTodoForm} from "./NewTodoForm";

// const todos = [
//     {text:'go to store',isCompleted: false},
//     {text:'wash car',isCompleted: false},
//     {text:'fold clothes',isCompleted: true},
// ]

export const TodoListBase = ({todos}) => (
    <div>
        <h1>My Todos</h1>
        <NewTodoForm/>
        {todos.map(todo => (
            <TodoListItem todo={todo} key={todo.text}/>
        ))}
    </div>
);

const mapStateToProps= state => ({
    todos: state.todos
});

export const TodoList = connect(mapStateToProps)(TodoListBase);