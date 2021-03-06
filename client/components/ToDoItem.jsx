import React from "react";
import {connect} from 'react-redux'
import { modifyTask, removeTask } from "../actions";
import { updateTask } from '../apis'

class ToDoItem extends React.Component {
  state = {
    editing: false,
    editedTodo: ''
  }

  componentDidMount() {
    this.setState({
      editedTodo: this.props.task.name
    })
  }

  setEditing = (value) => {
    this.setState({
      editing: value
    })
  }

  handleChange = (evt) => {
    this.setState({
      editedTodo: evt.target.value
    })
  }
 

  handleDelete = () => {
    this.props.dispatch(removeTask(this.props.task.id))
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const updatedTask = {
      name: this.state.editedTodo,
      status: 0
    }
    this.props.dispatch(modifyTask(this.props.task.id, updatedTask))
      .then(this.setEditing(false))
    
    console.log('submit')
  }

  handleTick = (evt) => {

    const updatedTask = {
      status: !this.props.task.status
    }

    this.props.dispatch(modifyTask(this.props.task.id, updatedTask))
  }

  render() {

    const { task } = this.props

    return (
      <li 
        key={task.id} 
        className={[task.status ? 'completed' : '', this.state.editing ? 'editing' : ''].join(' ')}
        onBlur={() => this.setEditing(false)}
      >
        <div className="view" onDoubleClick={()=>this.setEditing(true)}>
          <input className="toggle" type="checkbox" checked={task.status} onChange={this.handleTick}/>
          {!this.state.showEditform ? <label>{task.name}</label>: <EditToDo task={task}/>}
          <button className="destroy" onClick={ this.handleDelete}></button>
        </div>
        
        <form onSubmit={this.handleSubmit}>
          {/* <input className="edit" value={this.state.editedTodo} onChange={this.handleChange}/> */}
          <input className="edit" value={this.state.editedTodo} onChange={this.handleChange} ref={ref => ref && ref.focus()}
    onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
    />
        </form>
      </li>
    )
  }
}



export default connect()(ToDoItem)
