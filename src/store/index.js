import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initState = {
  personnelList: [],
  personnelList_error: null,
  page: 1,
  personnels: []
}

function employeeReducer(state = initState, action) {
  const divider = 4
  switch (action.type) {
    case 'SET_PERSONNEL_LIST':
      console.log('set employee');
      console.log(action.payload);
      const page = 1
      const personnels = action.payload.results.slice(0, divider)
      console.log(personnels);
      return {...state, personnelList: action.payload.results, personnels: personnels, page: page}
    case 'SET_PERSONNEL_LIST_ERROR':
      return {...state, personnelList_error: action.payload}
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