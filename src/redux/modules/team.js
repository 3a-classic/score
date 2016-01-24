import { createAction, handleActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'
// import Immutable from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
// export const SELECT_TEAM = 'SELECT_TEAM'
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCHED_POSTS_FAILURE = 'FETCHED_POSTS_FAILURE'
export const FETCHED_POSTS_SUCCESS = 'FETCHED_POSTS_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
// export const select = createAction(SELECT_TEAM, value => value)

export const selectTeamFailure = createAction(FETCHED_POSTS_FAILURE, value => value)

export const selectTeamsSuccess = createAction(FETCHED_POSTS_SUCCESS, value => value)

export const actions = {
//  select,
  selectTeams,
  selectTeamFailure,
  selectTeamsSuccess
}

export const selectTeams = () => {
  console.log('【ACTION】selectTeams')
  return (dispatch, getState) => {
    console.log('【ACTION】selectTeams')
    fetch('../../../test/data/team.json')
    .then(response => response.json())
    .then(json => dispatch(selectTeamsSuccess(json)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
// export default handleActions({
//  [SELECT_TEAM]: (state, { payload }) => state + payload
// }, {'team': ['A', 'B', 'C']})

export default handleActions({
  [FETCH_POSTS_REQUEST]: (state, { palyload }) => {
    return Object.assign({}, state, {'isFetching': true})
  },
  [FETCHED_POSTS_SUCCESS]: (state, { palyload }) => {
    return Object.assign({}, state, {'isFetching': false, 'team': palyload})
  }
}, {
  'team': ['D', 'E'],
  'isFetching': false
})
