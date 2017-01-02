import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';

class ToDo extends React.Component {
  render() {
    return (<h1>ToDo App!</h1>);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<ToDo />, document.getElementById('root'));

  const store = configureStore();
  window.store = store;
});
