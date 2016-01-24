import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import teamMap from './modules/team'

export default combineReducers({
  counter,
  router,
  teamMap
})
