import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '../../types/Todo';
import { RootState } from '../../app/store';
import { actions } from '../../features/currentTodo';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const { setTodo } = actions;

  const selectedTodo: Todo | null = useSelector(
    (state: RootState) => state.currentTodo,
  );
  const { id, completed, title } = todo;

  const handleSelectTodo = (todoSelected: Todo) => {
    dispatch(setTodo(todoSelected));
    // eslint-disable-next-line no-console
    console.log(selectedTodo);
  };

  return (
    <tr
      data-cy="todo"
      className={classNames({
        'has-background-info-light': selectedTodo?.id === id,
      })}
      key={id}
    >
      <td className="is-vcentered">{id}</td>
      <td className="is-vcentered">
        {completed && (
          <span className="icon" data-cy="iconCompleted">
            <i className="fas fa-check" />
          </span>
        )}
      </td>
      <td className="is-vcentered is-expanded">
        <p className={classNames({
          'has-text-success': completed,
          'has-text-danger': !completed,
        })}
        >
          {title}
        </p>
      </td>
      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={() => (handleSelectTodo(todo))}
        >
          {selectedTodo?.id === id ? (
            <span className="icon">
              <i className="far fa-eye-slash" />
            </span>
          ) : (
            <span className="icon">
              <i className="far fa-eye" />
            </span>
          )}
        </button>
      </td>
    </tr>
  );
};
