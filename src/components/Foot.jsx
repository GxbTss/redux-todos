import React, { Component } from 'react'
import FilterLink from '../containers/FilterLink'

export default class Foot extends Component {
  render() {
    return (
      <div>
        SHOW ： 
        <FilterLink filter='SHOW_ALL'>All</FilterLink>{'  '}
        <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>{'  '}
        <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
      </div>
    )
  }
}
