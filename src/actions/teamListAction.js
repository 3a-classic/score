import { createAction } from 'redux-actions'
import { GET_TEAM_REQUEST, GET_TEAM_SUCCESS } from '../constants/teamListConstant'

export const actions = {
//  selectTeam,
  getTeamSuccess,
  fetchPostsIfNeeded
}

// const teamObj = () => {
//   return {
//     team
//   }
// }

const getTeamObj = (json) => {
  console.debug('【DEBUG】PAGE=TeamView;FILE=team.js;VAR:json=')
  console.dir(json)
  console.log('teamList=' + json.team.concat())
  return {
    teamList: { team: json.team.concat(),
    receivedAt: Date.now()}
  }
}

function shouldFetchPosts (state) {
  const posts = state.postsByTeam
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export function fetchPostsIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(getTeamList())
    }
  }
}

function getTeamList () {
  return dispatch => {
    dispatch(getTeamRequest())
//    return fetch('http://api.3a-classic.com/v1/page/index')
    return fetch('/score/sampleData/team')
    .then(response => response.json())
    .then(json => dispatch(getTeamSuccess(json)))
  }
}

// export const selectTeam = createAction(SELECT_TEAM, teamObj )
export const getTeamRequest = createAction(GET_TEAM_REQUEST)
export const getTeamSuccess = createAction(GET_TEAM_SUCCESS, getTeamObj)

