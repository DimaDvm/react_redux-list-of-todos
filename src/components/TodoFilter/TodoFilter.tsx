import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Status } from '../../types/Status';
import { setQuery, setStatus } from '../../features/filter';
import { RootState } from '../../app/store';

export const TodoFilter: React.FC = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  const [quer, setQuer] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    setQuer(newQuery);
    dispatch(setQuery(newQuery));
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = event.target.value as Status;

    dispatch(setStatus(selectedStatus));
  };

  // eslint-disable-next-line no-console
  useEffect(() => console.log(filter));

  return (
    <form
      className="field has-addons"
      onSubmit={event => event.preventDefault()}
    >
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={handleStatusChange}
            value={filter.status}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={quer}
          onChange={handleQueryChange}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
          />
        </span>
      </p>
    </form>
  );
};
