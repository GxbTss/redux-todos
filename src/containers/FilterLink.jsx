import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setVisibilityFilter } from '../actions'

class FilterLink extends Component {
  changefilter(e) {
    e.preventDefault()
    this.props.setVisibilityFilter(this.props.filter)
  }

  render() {
    if (this.props.filter === this.props.getFilter) {
      return <span>{this.props.children}</span>
    } else {
      return <a href="##" onClick={this.changefilter.bind(this)}>{this.props.children}</a>
    }
  }
}

function mapStateToProps(state) {
  return {
    getFilter: state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setVisibilityFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
