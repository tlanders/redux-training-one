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
        break;
    case DELETE_TODO:
        break;
    default:
        return state;
    }
}