import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions'
import { HashRouter as Router, Route } from 'react-router-dom'
import Main from './Main'

class App extends React.Component {
 

  componentDidMount () {
    this.refreshList()
  }

  refreshList = () => {
    this.props.dispatch(fetchTasks())
  }

  render () {
    return (
      <Router>
        <Route path='/:filter?' component={Main}/>
      </Router>
    )
  }
}

export default connect()(App)
