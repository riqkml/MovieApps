import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {studentReducer} from './Reducer';

const store = createStore(studentReducer, applyMiddleware(thunk));

export default store;
