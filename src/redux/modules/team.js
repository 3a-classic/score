import { createAction, handleActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'
// import Immutable from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
// export const SELECT_TEAM = 'SELECT_TEAM'
export const GET_TEAM_REQUEST = 'GET_TEAM_REQUEST'
export const GET_TEAM_SUCCESS = 'GET_TEAM_SUCCESS'
export const GET_TEAM_FAILURE = 'GET_TEAM_FAILURE'
export const SELECT_TEAM = 'SELECT_TEAM'
export const INVALIDATE_TEAM = 'INVALIDATE_TEAM'

// ------------------------------------
// Actions
// ------------------------------------
// export const select = createAction(SELECT_TEAM, value => value)

//export const selectTeamFailure = createAction(FETCHED_POSTS_FAILURE, value => value)

//export const selectTeamsSuccess = createAction(FETCHED_POSTS_SUCCESS, value => value)

export const actions = {
//  select,
    selectTeam,
//  selectTeamFailure,
  getTeamSuccess,
  fetchPostsIfNeeded
}

//export const selectTeams = () => {
//  console.log('【ACTION】selectTeams')
//  return (dispatch, getState) => {
//    console.log('【ACTION】selectTeams')
//    fetch('../../../test/data/team.json')
//    .then(response => response.json())
//    .then(json => dispatch(selectTeamsSuccess(json)))
//  }
//}

const teamObj = () => {
  return {
    team
  }
}

//function getTeamRequest () {
//  return {
//    type: GET_TEAM_REQUEST
//  }
//}

const getTeamObj = (json) => {
  console.debug('【DEBUG】PAGE=TeamView;FILE=team.js;VAR:json=')
  console.dir(json)
  console.log('teamList='+json.team.concat())
  return {
    teamList: {team:json.team.concat(),
    receivedAt: Date.now()},
  }
}

function shouldFetchPosts(state) {
  const posts = state.postsByTeam
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(getTeamList())
    }
  }
}

function getTeamList () {
  return dispatch => {
    dispatch(getTeamRequest())
    return fetch('http://api.3a-classic.com/v1/page/index')
    .then(response => response.json())
    .then(json => dispatch(getTeamSuccess(json)))
  }
}

export const selectTeam = createAction(SELECT_TEAM, teamObj )
export const getTeamRequest = createAction(GET_TEAM_REQUEST)
export const getTeamSuccess = createAction(GET_TEAM_SUCCESS, getTeamObj)

// ------------------------------------
// Reducer
// ------------------------------------
// export default handleActions({
//  [SELECT_TEAM]: (state, { payload }) => state + payload
// }, {'team': ['A', 'B', 'C']})

//export default handleActions({
//  [FETCH_POSTS_REQUEST]: (state, { palyload }) => {
//    return Object.assign({}, state, {'isFetching': true})
//  },
//  [FETCHED_POSTS_SUCCESS]: (state, { palyload }) => {
//    return Object.assign({}, state, {'isFetching': false, 'team': palyload})
//  }
//}, {
//  'team': ['D', 'E'],
//  'isFetching': false
//})

export default handleActions({
  SELECT_TEAM: (state, action) => (
    Object.assign({}, state, {
      team: action.payload.team,
    })
  ),
  GET_TEAM_REQUEST: (state, action) => (
    Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    })
  ),
  GET_TEAM_SUCCESS: (state, action) => (
    Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      team: action.payload.teamList.team,
      lastUpdated: action.payload.teamList.receivedAt
    })
  ),
  INVALIDATE_TEAM: (state, action) => (
    Object.assign({}, state, {
      didInvalidate: true
    })
  ),
},
{
  team : ['testA','testB'],
  isFetching : false
})
