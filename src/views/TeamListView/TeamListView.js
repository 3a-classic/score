import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import classes from './TeamView.scss'
import { actions as teamActions } from '../../actions/teamListAction'
import TeamListCompornent from '../../components/teamList'
import {size} from 'lodash'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
//  isFetching,
//  lastUpdated,
  teamState: state.teamState
})

export class TeamView extends React.Component {
  static propTypes = {
    teamState: PropTypes.object.isRequired,
    fetchPostsIfNeeded: PropTypes.func.isRequired
  };

  componentDidMount () {
//    const { dispatch } = this.props
    this.props.fetchPostsIfNeeded()
  }

  render () {
    const { teamState } = this.props
    const team = teamState.team
    console.debug('【DEBUG】PAGE=TeamView;FILE=TeamView.js;VAR:teamList=' + JSON.stringify(teamState))
    console.debug('【DEBUG】PAGE=TeamView;FILE=TeamView.js;VAR:team=' + JSON.stringify(team))
    return (
      <div className='container text-center'>
        <h1>Team Page</h1>
        {teamState.isFetching && size(team) === 0 &&
          <h2>Loading...</h2>
        }
        {!teamState.isFetching && size(team) === 0 &&
          <h2>Empty.</h2>
        }
        {size(team) > 0 &&
          <div style={{ opacity: teamState.isFetching ? 0.5 : 1 }}>
            <TeamListCompornent teams={team} />
          </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, teamActions)(TeamView)
