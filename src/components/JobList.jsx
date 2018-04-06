import React, { Component } from 'react'
import { Job } from './Job'

export default class JobList extends Component {
  constructor() {
    super()

    this.handleJobDelete = this.handleJobDelete.bind(this);
    this.handleJobEdit = this.handleJobEdit.bind(this);
  }

  handleJobDelete(id) {
    let curJobs = JSON.parse(localStorage.getItem('__daycare'));

    let newJobs = curJobs.filter(job => {
      return job.id !== id
    })

    localStorage.setItem('__daycare', JSON.stringify(newJobs));

    this.props.update()
  }

  handleJobEdit(id, newJob) {
    console.log("handleJobEdit func:", id, newJob)
    let oldJobs = JSON.parse(localStorage.getItem('__daycare')) || [];

    let newJobs = oldJobs.map(job => {
      if (job.id === id) {
        job = newJob;
      }
      return job;
    })

    localStorage.setItem('__daycare', JSON.stringify(newJobs));
    this.props.update();
  }

  renderList() {
    let jobs = JSON.parse(localStorage.getItem('__daycare')) || [];

    if (jobs.length > 0) {
      return jobs.map((job, i) => {
        return (
          <Job
            key={i}
            id={job.id}
            owner={job.owner}
            pokemon={job.pokemon}
            startLevel={job.startLevel}
            endLevel={job.endLevel}
            exp={job.exp}
            cost={job.cost}
            notes={job.notes}
            handleDelete={this.handleJobDelete}
            handleEdit={this.handleJobEdit}
          />
          )
      });
    }
  }

  render() {
    let jobs = JSON.parse(localStorage.getItem('__daycare')) || [];

    return (
      <div className='job-div col-xs-12'>
        <h3>Job List</h3>
        <div style={{ maxHeight: '450px', overflowY: 'auto' }}>
          <table className='table table-hover table-bordered'>
            <thead>
              <tr>
                <th style={{ width: '1px', whiteSpace: 'nowrap' }}>Owner</th>
                <th style={{ width: '1px', whiteSpace: 'nowrap' }}>Pokemon</th>
                <th style={{ width: '1px', whiteSpace: 'nowrap' }}>Level Start</th>
                <th style={{ width: '1px', whiteSpace: 'nowrap' }}>Level End</th>
                <th style={{ width: '1px', whiteSpace: 'nowrap' }}>Exp</th>
                <th style={{ width: '1px', whiteSpace: 'nowrap' }}>Cost</th>
                <th style={{ width: '1px', whiteSpace: 'nowrap' }}>Notes</th>
                <th className='set-width' style={{ width: '1px', whiteSpace: 'nowrap', minWidth: '60px' }}>E/D</th>
              </tr>
            </thead>
            <tbody>
                {jobs.length && jobs.length > 0 ? this.renderList() : null}
            </tbody>
          </table>
        </div>
        {jobs.length ? jobs.length < 1 ? <div>No current jobs!</div> : null : <div>No current jobs!</div>}
      </div>
      )
  }
}
