import { Todo } from '../types/Todo';

export const loadTodos = (todos: Todo[]) => ({
  type: 'todos/LOAD_TODOS',
  payload: todos,
});

type LoadTodos = {
  type: 'todos/LOAD_TODOS';
  payload: Todo[];
};

const todosReducer = (state: Todo[] = [], action: LoadTodos) => {
  switch (action.type) {
    case 'todos/LOAD_TODOS':
      return action.payload;
    default:
      return state;
  }
};

export default todosReducer;
