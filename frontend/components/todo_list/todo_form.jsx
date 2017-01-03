import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setTitle() {
    return (event => this.setState({title: event.currentTarget.value}));
  }

  setBody(event) {
    this.setState({body: event.currentTarget.value});
  }

  handleClick(e) {
    e.preventDefault();
    const time = new Date().getTime()
    this.props.receiveTodo({
      id: time,
      title: this.state.title,
      body: this.state.body
    })
    // console.log(this.state);
    this.setState({
      title: "",
      body: ""
    })
  }


  render () {
    return (
      <form>

        <label>title
          <input type="text" value={this.state.title} onChange={this.setTitle()}>
          </input>
        </label>

        <label>body
          <input type="text" value={this.state.body} onChange={this.setBody}>
          </input>
        </label>

        <button onClick={this.handleClick}
                type="submit"
                value="submit">
                Add Todo
        </button>

      </form>
    );
  }
};

export default TodoForm;
