import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Footer from './Footer'
import ToDoList from './ToDoList'
import { fetchTasks } from '../actions'

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount () {
    this.refreshList()
  }

  refreshList = () => {
    this.props.dispatch(fetchTasks())
    .then(response => {
    })
  }

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo refreshList={this.refreshList}/>
        </header>
        <section className="main">
          <ToDoList refreshList={this.refreshList}/>
        </section>
        <section className="main"></section>
        <footer className="footer">
          <Footer/>
        </footer>
      </>
    )
  }
}

export default connect()(App)
