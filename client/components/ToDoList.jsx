import React from "react";
import {connect} from 'react-redux'
import ToDoItem from "./ToDoItem";

function ToDoList(props) {

  return (
      <>
    <input id="toggle-all" className="toggle-all" type="checkbox"/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {props.tasks.map(task => {
          return <ToDoItem task={task} key={task.id}/>
      })}
    </ul>
    </>
  );
}

function mapStateToProps(globalState) {
    return {
        tasks: globalState.tasks
    }
}

export default connect(mapStateToProps)(ToDoList)
