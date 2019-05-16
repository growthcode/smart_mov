// https://redux.js.org/basics/reducers#note-for-es6-savvy-users
// Because combineReducers expects an object, we can put all top-level reducers into a separate file, export each reducer function, and use import * as reducers to get them as an object with their names as the keys:
// import { combineReducers } from 'redux'
// import * as reducers from './reducers'
// const todoApp = combineReducers(reducers)
// ==========================================================

import { combineReducers } from 'redux'
// import movs from '~/redux/reducers/movs'
import currentUser from '~/redux/reducers/currentUser'

export default combineReducers({
  currentUser, // reducer function
  // movs, // reducer function
})
