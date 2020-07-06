import React, {useState} from "react";
import {connect} from 'react-redux';
import {createTodo} from "../actions/todosActions";

export const NewTodoFormBase = ({onClickCreate}) => {
    const [inputText, setInputText] = useState('');
    return (
        <div>
            <input
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                type={"text"}/>
            <button onClick={() => {
                onClickCreate(inputText);
                setInputText('');
            }}>Create Todo</button>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    onClickCreate: text => dispatch(createTodo(text)),
});

export const NewTodoForm = connect(null, mapDispatchToProps)(NewTodoFormBase);