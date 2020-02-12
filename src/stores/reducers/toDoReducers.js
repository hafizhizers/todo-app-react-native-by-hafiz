import {
  GET_TODO_DATASOURCE,
  TO_DO_TEXT,
  EDIT_VIEW,
  EDIT_TO_DO_TEXT,
} from '../types';

const initialState = {
  toDoDataSource: [],
  toDoText: '',
  editView: '',
  editToDoText: '',
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_DATASOURCE:
      return {
        ...state,
        toDoDataSource: action.payload,
      };
    case TO_DO_TEXT:
      return {
        ...state,
        toDoText: action.payload,
      };
    case EDIT_VIEW:
      return {
        ...state,
        editView: action.payload,
      };
    case EDIT_TO_DO_TEXT:
      return {
        ...state,
        editToDoText: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducers;
