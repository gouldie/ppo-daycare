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
      <div className='container'>
        <h1>PPO Daycare Buddy<span style={{fontSize: '10px', verticalAlign: 'top'}}>beta</span></h1>
        <Calc update={this.mapStorageToState} />
        <JobList update={this.mapStorageToState} />
        <img
          src={'http://i.imgur.com/Y5QiBTf.png'}
          alt="boohoo"
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '0',
            right: '0',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}></img>
      </div>
    )
  }
}
