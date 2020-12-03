import React from "react";
import {connect} from 'react-redux'
import { modifyTask } from "../actions";
import { deleteTask, updateTask } from '../apis'

class ToDoItem extends React.Component {
  state = {
    editing: false,
    editedTodo: ''
  }

  // editInput = React.createRef()


  componentDidMount() {
    this.setState({
      editedTodo: this.props.task.name
    })
  }

  // componentDidUpdate (prevProps, prevState) {
  //   if (prevState.editing !== this.state.editing && this.state.editing) {
  //     this.editInput.current.focus()
  //   }
  // }

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
    deleteTask(this.props.task.id)
   
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const updatedTask = {
      name: this.state.editedTodo
    }
    this.props.dispatch(modifyTask(this.props.task.id, updatedTask))
    console.log('submit')
  }

 

  render() {

    const { task } = this.props

    return (
      <li 
        key={task.id} 
        className={[task.completed ? 'completed' : '', this.state.editing ? 'editing' : ''].join(' ')}
        // onBlur={() => this.setEditing(false)}
        autoFocus="autofocus"
      >
        <div className="view" onDoubleClick={()=>this.setEditing(true)}>
          <input className="toggle" type="checkbox" checked=""/>
          {!this.state.showEditform ? <label>{task.name}</label>: <EditToDo task={task}/>}
          <button className="destroy" onClick={ this.handleDelete}></button>
        </div>
        
        {/* <input className="edit" value="Create a TodoMVC template" /> */}
        <form onSubmit={this.handleSubmit}>
          <input className="edit" value={this.state.editedTodo} onChange={this.handleChange}/>
        </form>
      </li>
    )
  }
}



export default connect()(ToDoItem)
