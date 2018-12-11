import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

// reducer => PURE!!!!!!! function that sets the state
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
