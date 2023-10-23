export type Status = 'all' | 'active' | 'completed';

export interface SetStatusAction {
  type: typeof SET_STATUS;
  payload: Status;
}

export interface SetQueryAction {
  type: typeof SET_QUERY;
  payload: string;
}

export type FilterActionTypes = SetStatusAction | SetQueryAction;

export const SET_STATUS = 'filter/SET_STATUS';
export const SET_QUERY = 'filter/SET_QUERY';

export interface FilterState {
  query: string;
  status: Status;
}
