import { RECEIVE_TODOS, receiveTodos } from '../actions/todo_actions';
import { RECEIVE_TODO, receiveTodo } from '../actions/todo_actions';
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
  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      Object.keys(action.todos).forEach((key) => {
        newState[key] = action.todos[key];
      });
      return newState;
    case RECEIVE_TODO:
      const addedState = {};
      const key = parseInt(Object.values(action.todo)[0]);
      addedState[key] = action.todo;
      return merge(state, addedState);
    default:
      return state;
  }
};

export default todosReducer;
