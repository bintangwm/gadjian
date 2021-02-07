import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initState = {
  personnelList: [],
  personnelListDisplay: [],
  personnelList_error: null
}

function employeeReducer(state = initState, action) {
  let tempPersonnelList = []
  switch (action.type) {
    case 'SET_PERSONNEL_LIST':
      console.log(action.payload);
      return { ...state, personnelList: action.payload.results, personnelListDisplay: action.payload.results }
    case 'SET_PERSONNEL_LIST_ERROR':
      return { ...state, personnelList_error: action.payload }
    case 'SEARCH_PERSONNEL_LOCAL':
      // search personnels locally by their firstname
      let query = action.payload.query 
      console.log(query, 'action');
      if (!query) {
        tempPersonnelList = state.personnelList
      } else {
        // eslint-disable-next-line 
        tempPersonnelList = state.personnelList.filter(personnel => {
          if (personnel.name.first.toLowerCase().includes(query.toLowerCase())) {
            return personnel
          }
        })
      }
      return { ...state, personnelListDisplay: tempPersonnelList }
    default:
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(employeeReducer, enhancer)

export default store