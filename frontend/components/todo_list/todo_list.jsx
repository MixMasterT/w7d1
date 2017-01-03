import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ul>
        {this.props.todos.map((todo, idx) => {
          return(<li key={idx}>{todo.title}</li>);
        })}
      </ul>
    );
  }
}

export default TodoList;
//
