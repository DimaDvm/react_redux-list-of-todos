import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList: React.FC = () => {
  const { query, status } = useSelector((state: RootState) => state.filter);
  const todos: Todo[] = useSelector((state: RootState) => state.todos);

  const todosFilter = (state: Todo[]): Todo[] => {
    let filteredTodos = state;

    if (query.length > 0) {
      filteredTodos = state.filter((todo) => todo.title.includes(query));
    }

    switch (status) {
      case 'all':
        return filteredTodos;

      case 'active':
        return filteredTodos.filter(todo => !todo.completed);

      case 'completed':
        return filteredTodos.filter(todo => todo.completed);

      default:
        return state;
    }
  };

  const filteredTodos = todosFilter(todos);

  if (todos.length === 0) {
    return (
      <p className="notification is-warning">
        There are no todos matching current filter criteria
      </p>
    );
  }

  return (
    <>
      <table className="table is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>#</th>

            <th>
              <span className="icon">
                <i className="fas fa-check" />
              </span>
            </th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>
        {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        <tbody />
      </table>
    </>
  );
};
