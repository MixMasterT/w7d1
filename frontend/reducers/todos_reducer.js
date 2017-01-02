import { RECEIVE_TODOS } from '../actions/todos_action';
import { RECEIVE_TODO } from '../actions/todos_action';
import { merge } from 'lodash';

// reducers/todos_reducer.js
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  // debugger;
  switch(action.type) {
    // case RECEIVE_TODOS:
    //   return []
    default:
      return state;
  }
};

export default todosReducer;
