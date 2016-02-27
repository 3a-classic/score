import React from 'react'

export class TeamTest extends React.Component {
  render () {
    const teamData = {
      'team': [
        'A',
        'B',
        'C',
        'D',
        'E'
      ],
      'length': 5
    }
    return (
    <div>
        {JSON.stringify(teamData)}
    </div>
  ) }
}

export default (TeamTest)
