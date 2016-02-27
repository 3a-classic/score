import React, { PropTypes } from 'react'

export default class RButton extends React.Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
    tagclass: PropTypes.string
  };

  render () {
    const {data, tagclass} = this.props
    return (
      <button className={tagclass}>{data}</button>
    )
  }
}
