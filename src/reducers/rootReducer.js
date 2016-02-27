import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counterReducer from '../reducers/counterReducer'
import teamState from '../reducers/teamListReducer'

export default combineReducers({
  counterReducer,
  router,
  teamState
})
