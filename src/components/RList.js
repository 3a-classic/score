import React, { PropTypes } from 'react'
import RTh from '../components/RTh'
// import RTd from '../components/RTd'

export class RList extends React.Component {
  static propTypes = {
    thdata: PropTypes.array.isRequired,
    tddata: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    thclass: PropTypes.string,
    tdclass: PropTypes.string
  };

  render () {
    const {thdata, tddata, type, thclass, tdclass} = this.props
    return (
      <table>
        <tr>
          <RTh
            thdata= {thdata}
            type = {type}
            thclass = {thclass} />
        </tr>
        <tr>
          <td className={tdclass}>{tddata[0]}</td>
        </tr>
      </table>
    )
  }
}
