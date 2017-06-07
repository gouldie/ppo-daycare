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
        <Calc update={this.mapStorageToState} />
        <JobList update={this.mapStorageToState} />

        <div className='footer' style={{
          position: 'absolute',
          left: '0',
          right: '0',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <p style={{ marginBottom: '5px' }}>made with ♥ by</p>
          <img
            src={'http://i.imgur.com/Y5QiBTf.png'}
            alt="boohoo"
            >
          </img>
          <p style={{ margin: '5px 0 0 0' }}>comments, suggestions, criticism welcome :^)</p>
        </div>
      </div>
    )
  }
}
