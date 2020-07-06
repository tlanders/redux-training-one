import {
    CREATE_TODO,
    DELETE_TODO,
    MARK_TODO_AS_COMPLETED
} from "../actions/todosActions";

export const todos = (state = [], action) => {
    switch(action.type) {
    case CREATE_TODO:
        return state.concat({
            text: action.payload.text,
            isCompleted:false
        });
    case MARK_TODO_AS_COMPLETED:
        return state.map(todo => todo.text === action.payload.text
                ? {...todo, isCompleted: true}
                : todo);
    case DELETE_TODO:
        return state.filter(todo => todo.text !== action.payload.text);
    default:
        return state;
    }
}