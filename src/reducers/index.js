const init = {
    todos: [],
    isLoading: false,
};

const todosReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_TODOS_START':
        return {
            ...state,
            isLoading: true,
        }
    case 'GET_TODOS_SUCCESS':
        return {
            ...state,
            isLoading: false,
            todos: action.payload,
        }
    case 'GET_TODOS_FAILURE':
        return {
            ...state,
            isLoading: false
        }
    case 'UPDATE_TODO_START':
        return {
            ...state,
            isLoading: true,
        }
    case 'UPDATE_TODO_SUCCESS':
        return {
            ...state,
            isLoading: false,
            todos: state.todos.map(todo => {
                if (todo.id === ~~action.payload.id) return action.payload;
                return todo;
            }),
        }
    case 'UPDATE_TODO_FAILURE':
        return {
            ...state,
            isLoading: false,
        }
    case 'CREATE_TODO_START':
        return {
            ...state,
            isLoading: true,
        }
    case 'CREATE_TODO_SUCCESS':
        return {
            ...state,
            isLoading: false,
            todos: [ ...state.todos, action.payload]
        }
    case 'CREATE_TODO_FAILURE':
        return {
            ...state,
            isLoading: false,
        }
    default:
      return state;
  }
};

export default todosReducer;