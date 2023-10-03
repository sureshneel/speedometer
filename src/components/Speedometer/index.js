// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onAccelerate = () => {
    this.setState(prevState => ({
      count: prevState.count + 10,
    }))
  }
  onApplyBrake = () => {
    this.setState(prevState => ({
      count: prevState.count - 10,
    }))
  }
  render() {
    const {count} = this.state
    return (
      <div className="speed-container">
        <h1 className="main-heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="SPEEDOMETER"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="hit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button className="accelerate" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="apply-break" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
