import {
  GET_TODO_DATASOURCE,
  TO_DO_TEXT,
  EDIT_VIEW,
  EDIT_TO_DO_TEXT,
} from '../types';
import toDoServices from '../../services/toDoServices.js';

export const toDoText = payload => ({
  type: TO_DO_TEXT,
  payload: payload,
});

export const getToDoDataSource = payload => ({
  type: GET_TODO_DATASOURCE,
  payload: payload,
});

export const deleteToDo = payload => {
  toDoServices.deleteToDo(payload);
  let data = toDoServices.getToDo();
  return {
    type: GET_TODO_DATASOURCE,
    payload: data,
  };
};

export const addToDo = (payload, dispatch) => {
  toDoServices.addToDo(payload);
  let data = toDoServices.getToDo();
  dispatch({
    type: GET_TODO_DATASOURCE,
    payload: data,
  });
};

export const editViewToDo = payload => {
  return {
    type: EDIT_VIEW,
    payload: payload,
  };
};

export const editToDoText = payload => ({
  type: EDIT_TO_DO_TEXT,
  payload: payload,
});

export const updateToDo = payload => {
  toDoServices.updateToDo(payload);
  return {
    type: EDIT_VIEW,
    payload: '',
  };
};
