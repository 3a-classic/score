import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from '../actions/counter'
import teamState from '../reducers/teamReducer'

export default combineReducers({
  counter,
  router,
  teamState
})
