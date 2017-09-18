import React, { Component } from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Foot from '../components/Foot'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Foot/>
      </div>
    )
  }
}
