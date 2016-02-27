import React, { PropTypes } from 'react'
import RButton from '../components/RButton'

export default class TeamList extends React.Component {
  static propTypes = {
    teams: PropTypes.array.isRequired
  };

  render () {
    const {teams} = this.props
    return (
      <div>
      {teams.map((team) =>
        <RButton
          data = {team}
          tagclass = {'background="red"'}
        />
      )}
      </div>
    )
  }
}

