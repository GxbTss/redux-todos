import React, { Component } from 'react'

export default class TodoList extends Component {
  changeFilter(id){
    this.props.toggleTodo(id)
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => {
            return <li key={todo.id} 
                       style={{textDecoration: todo.completed ? 'line-through' : 'none'}} 
                       onClick={this.changeFilter.bind(this, todo.id)}>
                    {todo.text}
                  </li>
          })
        }
      </ul>
    )
  }
}
