import React from "react";
import { createTask } from "../actions";
import { connect } from "react-redux"

class AddTodo extends React.Component {
  state = {
    newTask: '',
    status: 0,
  }

  handleChange = (evt) => {
    this.setState({
      newTask: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    if (evt.key === "Enter"){
      this.props.dispatch(createTask(this.state))
      .then(() => {
        this.setState({
          newTask: ''
        })
      })
    }
  }

  render() {
    return (
      <>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}
          value={this.state.newTask}
        />
      </>
    )
  }
}

export default connect()(AddTodo)
