import React from 'react'
import AddTodo from './AddTodo'
import Footer from './Footer'
import ToDoList from './ToDoList'

class App extends React.Component {
  componentDidMount () {}

  render () {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main">
          <ToDoList/>
        </section>
        <section className="main"></section>
        <footer className="footer">
          <Footer/>
        </footer>
      </>
    )
  }
}

export default App
