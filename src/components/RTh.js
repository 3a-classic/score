import React, { PropTypes } from 'react'

export class RTh extends React.Component {
  static propTypes = {
    thdata: PropTypes.array.isRequired,
    colNum: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    thclass: PropTypes.string
  };

  render () {
    const {thdata, type, thclass} = this.props
    return (
      <th class={thclass}>{thdata}</th>
    )
  }
}
