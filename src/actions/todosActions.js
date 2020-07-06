// creating todos
export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text}
});

// marking todos as completed
export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: {text}
});

// deleting todos
export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = text => ({
    type: DELETE_TODO,
    payload: {text}
});
