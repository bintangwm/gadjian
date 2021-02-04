export function fetchPersonnelList() {
  return (dispatch) => {
    fetch('https://randomuser.me/api/?results=28')
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject({ err: res })
        }
      })
      .then(data => {
        dispatch({
          type: 'SET_PERSONNEL_LIST',
          payload: data
        })
      })
      .catch(err => {
        console.log('error set');
        dispatch({ type: 'SET_PERSONNEL_LIST_ERROR', payload: err })
      })
  }
}