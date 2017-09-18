export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
        return [
          ...state.slice(0, action.id),
          Object.assign({}, state[action.id], {
            completed: !state[action.id].completed
          }),
          ...state.slice(action.id + 1)
        ]
      //  return state.map(todo => {
      //   (todo.id === 1) ? Object.assign({},todo, {completed : !todo.completed}) : todo
      // })
    default:
      return state;
  }
}