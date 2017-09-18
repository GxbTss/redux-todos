import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  stopSub(e) {
    e.preventDefault();
    let val = this.refs.inputs.value
    if (!val.trim()) {
      return
    }
    this.props.dispatch(addTodo(val))
    this.refs.inputs.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.stopSub.bind(this)}>
          <input type="text" ref="inputs"/>
          <button type="submit">添加</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(mapDispatchToProps)(AddTodo)