const getTodosStart = () => ({
    type: 'GET_TODOS_START',
});

const getTodosSuccess = payload => ({
    type: 'GET_TODOS_SUCCESS',
    payload,
});

const getTodosFailure = () => ({
    type: 'GET_TODOS_FAILURE',
});

const updateTodoStart = () => ({
    type: 'UPDATE_TODO_START',
});

const updateTodoSuccess = payload => ({
    type: 'UPDATE_TODO_SUCCESS',
    payload,
});

const updateTodoFailure = () => ({
    type: 'UPDATE_TODO_FAILURE',
});

const createTodoStart = () => ({
    type: 'CREATE_TODO_START',
});

const createTodoSuccess = payload => ({
    type: 'CREATE_TODO_SUCCESS',
    payload,
});

const createTodoFailure = () => ({
    type: 'CREATE_TODO_FAILURE',
});

const getTodos = () =>
    async function (dispatch) {
        try {
            dispatch(getTodosStart());
            const response = await fetch(`http://quip-todos.herokuapp.com/get_todos?email=${process.env.REACT_APP_EMAIL}`)
            const payload = await response.json();
            if (response.ok) {
                dispatch(getTodosSuccess(payload));
            } else {
                dispatch(getTodosFailure());
            }
        } catch (error) {
            dispatch(getTodosFailure());
        }
    }

const createTodo = text =>
    async function (dispatch) {
        try {
            dispatch(createTodoStart());
            const body = `email=${process.env.REACT_APP_EMAIL}&text=${text}`;
            const response = await fetch('http://quip-todos.herokuapp.com/add_todo', { method: 'POST', headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, body });
            const payload = await response.json();
            if (response.ok) {
                dispatch(createTodoSuccess(payload))
            } else {
                dispatch(createTodoFailure())
            }
        } catch (error) {
            dispatch(createTodoFailure())
        }
    }

const updateTodo = data =>
    async function (dispatch) {
        try {
            dispatch(updateTodoStart());
            const body = `email=${process.env.REACT_APP_EMAIL}&id=${data.id}&completed=true`;
            const response = await fetch(`http://quip-todos.herokuapp.com/mark_completed`, { method: 'POST', headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, body });
            const payload = await response.json();
            payload.id = parseInt(payload.id, 10);
            if (response.ok) {
                dispatch(updateTodoSuccess(payload));
            } else {
                dispatch(updateTodoFailure());
            }
        } catch (error) {
            dispatch(updateTodoFailure());
        }
    }

export { getTodos, updateTodo, createTodo };