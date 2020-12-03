import React from 'react'
import { connect } from 'react-redux'
import { clearCompleted } from '../actions'

function Footer(props) {
  const handleClear = () => {
    props.dispatch(clearCompleted())
  }

  const taskTotal = props.tasks.filter(task => task.status == 0).length 

    return(
        <>
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>{taskTotal}</strong> item left</span>
        
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button className="clear-completed" onClick={handleClear}>Clear completed</button>
        </>
    )
}

function mapStateToProps (globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(Footer)