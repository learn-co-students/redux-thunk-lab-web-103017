const initialState = { loading: false, pictures: [] }


export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CATS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CATS':
      return {loading: false, pictures: action.cats}
    default:
    return state;
  }
}
