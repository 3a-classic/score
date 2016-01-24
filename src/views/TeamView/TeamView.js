import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as teamActions } from '../../redux/modules/team'
// import classes from './TeamView.scss'
import TeamList from '../../components/TeamList'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  teamMap: state.teamMap,
  teams: state.teamMap.team
})
export class TeamView extends React.Component {
  static propTypes = {
    teamMap: PropTypes.array.object,
    teams: PropTypes.array.isRequired
  };

  componentDidMount () {
    teamActions.selectTeams()
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Team Page</h1>
        {JSON.stringify(this.props.teamMap)}
        <TeamList teams={this.props.teams} />
      </div>
    )
  }
}

export default connect(mapStateToProps, teamActions)(TeamView)
