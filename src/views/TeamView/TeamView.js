import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectTeam, fetchPostsIfNeeded } from '../../redux/modules/team'
// import classes from './TeamView.scss'
import { actions as teamActions } from '../../redux/modules/team'
import TeamListCompornent from '../../components/teamList'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
//  isFetching,
//  lastUpdated,
  teamState : state.teamState
})

export class TeamView extends React.Component {
  static propTypes = {
//    teamList: PropTypes.array.object,
//    selectTeams: PropTypes.func.isRequired
  };

  componentDidMount() {
//    const { dispatch } = this.props
    this.props.fetchPostsIfNeeded()
  }

  render () {
    const { teamState } = this.props
    const team = teamState.team
    {console.debug('【DEBUG】PAGE=TeamView;FILE=TeamView.js;VAR:teamList='+JSON.stringify(teamState))}
    {console.debug('【DEBUG】PAGE=TeamView;FILE=TeamView.js;VAR:team='+JSON.stringify(team))}
    return (
      <div className='container text-center'>
        <h1>Team Page</h1>
        {teamState.isFetching && team.length === 0 &&
          <h2>Loading...</h2>
        }
        {!teamState.isFetching && team.length === 0 &&
          <h2>Empty.</h2>
        }
        {teamState.team.length > 0 &&
          <div style={{ opacity: teamState.isFetching ? 0.5 : 1 }}>
            <TeamListCompornent teams={team} />
          </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, teamActions)(TeamView)
