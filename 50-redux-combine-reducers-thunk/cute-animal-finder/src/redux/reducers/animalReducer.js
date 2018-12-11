import {  UPDATE_ANIMAL } from '../types';

const initialState = {
  animalSrc: null,
  isLoading: true,
};

export default function animalReducer(state = initialState, action) {
  console.log('%c animalReducer', 'color: white');
  switch(action.type) {
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    case "FETCHING_ANIMAL":
      return { ...state, isLoading: true };
    case "FETCHED_ANIMAL":
      return { ...state, isLoading: false };
    // LIKE_ANIMAL
    // DISLIKE_ANIMAL ??????????????????

    // case RESET
    default:
      return state;
  }
}
