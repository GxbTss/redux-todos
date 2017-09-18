import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { bindActionCreators } from 'redux'
import { toggleTodo } from '../actions'

function getFilter(todos, filter) {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error('UnKnown filter:' + filter)
  }
}

function mapStateToProps(state) {
  return {
    todos: getFilter(state.todos, state.visibilityFilter) 
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleTodo }, dispatch)
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
