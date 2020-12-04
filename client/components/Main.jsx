import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Footer from './Footer'
import ToDoList from './ToDoList'

class Main extends React.Component {

  

  // tasks = this.props.tasks.filter(task => (this.filter === 'active' && task.status == 0 || this.filter === 'completed' && task.status == 1))
   

  render () {
    const {filter} = this.props.match.params
    const filteredTasks = this.props.tasks.filter(task => (filter == 'active' && task.status == 0 || filter == 'completed' && task.status == 1))
   
    console.log(filteredTasks)
    console.log(filter)

    // const tasks = this.props.tasks.filter(task => task.status == 0)

    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo/>
        </header>
        <section className="main">
          <ToDoList tasks={filter ? filteredTasks : this.props.tasks}/>
        </section>
        <section className="main"></section>
        <footer className="footer">
          <Footer/>
        </footer>
        </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
      tasks: globalState.tasks
  }
}


export default connect(mapStateToProps)(Main)
