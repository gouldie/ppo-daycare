import React, { Component } from 'react';
import Calc from './Calc'
import JobList from './JobList'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      jobs: JSON.parse(localStorage.getItem('__daycare')) || [],
    }

    this.mapStorageToState = this.mapStorageToState.bind(this);
  }

  mapStorageToState() {
    this.setState({
      jobs: JSON.parse(localStorage.getItem('__daycare')) || []
    })
  }

  render() {
    return (
      <div>
        <h1>PPO Daycare Buddy</h1>
        <h5 style={{ marginBottom: "5px" }}>currently using pre-summer event exp values.</h5>
        <h5 style={{ marginTop: "5px" }}>until we know more, you can get a better price estimate by knocking 8% off the total cost.</h5>
        <Calc update={this.mapStorageToState} />
        <JobList update={this.mapStorageToState} />

        <div className='footer' style={{
          position: 'absolute',
          left: '0',
          right: '0',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <p style={{ marginBottom: '5px' }}>made with ♥ by Gouldie</p>
        </div>
      </div>
    )
  }
}
