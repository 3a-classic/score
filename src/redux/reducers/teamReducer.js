import { handleActions } from 'redux-actions'
import Immutable from 'immutable'

let initialState = Immutable.fromJS({
  team: ['testA', 'testB'],
  isFetching: false
})
// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({
  SELECT_TEAM: (state = initialState, action) => (
      state.merge({team: action.payload.team})
  ),
  GET_TEAM_REQUEST: (state = initialState, action) => (
    state.merge({isFetching: true})
      .merge({didInvalidate: false})
  ),
  GET_TEAM_SUCCESS: (state = initialState, action) => (
    state.merge({isFetching: false})
      .merge({didInvalidate: false})
      .merge({team: action.payload.teamList.team})
      .merge({lastUpdated: action.payload.teamList.receivedAt})
  ),
  INVALIDATE_TEAM: (state = initialState, action) => (
    state.merge({didInvalidate: true})
  )
},
  initialState
)
