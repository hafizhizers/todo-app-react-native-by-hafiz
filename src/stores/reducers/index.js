import {combineReducers} from 'redux';
import toDoReducers from './toDoReducers';

const appReducer = combineReducers({
  toDoReducers: toDoReducers,
});

export default appReducer;