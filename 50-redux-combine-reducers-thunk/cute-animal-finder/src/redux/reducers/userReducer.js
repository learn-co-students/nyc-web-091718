import { ADD_USER } from '../types';

const initialState = {
  users: [],
};

export default function userReducer(state = initialState, action) {
  console.log('%c userReducer', 'color: green');
  // action => POJO => { type, payload }
  switch(action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };

    // DELETE_USER
    // LOGOUT
    // UPDATE_USER

    // case RESET
    default:
      return state;
  }
}
