import UUID from 'uuid';
import { ADD_USER, UPDATE_ANIMAL } from './types';
import AnimalAdapter from '../apis/AnimalAdapter';

export function addUser(name, email, animalPreference) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email, animalPreference }
  }
}

export function updateAnimal(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

export function fetchAnimal() {
  return (dispatch) => {
    console.log('fetchAnimal')

    dispatch({ type: 'FETCHING_ANIMAL' })
    AnimalAdapter.getDog()
      .then(url => {
        // callback()
        // return { } // this nopt come back when we use fetchAnimalAction()?
        dispatch(updateAnimal(url));
        dispatch({ type: 'FETCHED_ANIMAL' })
      })
  }

  // AnimalAdapter.getDog()
  //   .then(url => {
  //     // callback()
  //     // return { } // this nopt come back when we use fetchAnimalAction()?
  //     // dispatch(updateAnimalAction(url));
  //   })
  //
  // // setTimeout() <== I'm curious if I can hack it to work.
}
