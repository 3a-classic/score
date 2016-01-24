import { createAction, handleActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'


// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_TEAM = 'SELECT_TEAM'
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCHED_POSTS_FAILURE = 'FETCHED_POSTS_FAILURE'
export const FETCHED_POSTS_SUCCESS = 'FETCHED_POSTS_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export const select = createAction(SELECT_TEAM, value => value)

export const selectTeams = createAction(FETCH_POSTS_REQUEST, fetchPosts())

export const selectTeamFailure = createAction(FETCHED_POSTS_FAILURE, value => value)

export const selectTeamsSuccess = createAction(FETCHED_POSTS_SUCCESS, value => value)

export const actions = {
  select,
  selectTeams,
  selectTeamFailure,
  selectTeamsSuccess
}

function fetchPosts(){
  return dispatch => {
    fetch(`http://api.3a-classic.com/v1/page/index`)
      .then(response => response.json())
      .then(json => dispatch(selectTeamsSuccess(json)))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [SELECT_TEAM]: (state, { payload }) => state + payload
}, {'team': ['A', 'B', 'C']})

export default handleActions({
  [FETCH_POSTS_REQUEST]: (state, { palyload }) => state}, {'team': ['D', 'E']})


