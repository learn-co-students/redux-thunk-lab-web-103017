export default function fetchCats() {

  return function(dispatch) {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
      .then(resp => resp.json())
        .then(json => { dispatch({type: 'FETCH_CATS', cats: json.images}) })
  }
}
