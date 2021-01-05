import React, { Component } from 'react'
import EasyEdit from 'react-easy-edit'
import exp from '../exp'

export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 1,
      end: 1,
      exp: 0,
      cost: 0,
      ratio: 150
    }

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calcExp = this.calcExp.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this)
  }

  componentDidMount() {
    localStorage.getItem('__daycare') &&
    this.setState({
      jobs: JSON.parse(localStorage.getItem('__daycare'))
    })
  }

  calcExp() {
    const start = parseInt(this.state.start);
    const end = parseInt(this.state.end);

    if (start < 1 || start > 99) return
    if (end < 1 || end > 100) return
    if (end < start) return

    let total = 0;
    let cost = 0;

    for (let i = start - 1; i < end - 1; i++) {
      total += exp[i];
    }

    cost = total * (this.state.ratio * 0.001);

    this.setState({
      exp: total.toLocaleString(),
      cost: Math.ceil(cost).toLocaleString()
    });
  }

  handleChangeStart(e) {
    if (e.target.value < 0 || e.target.value > 99) return

    this.setState({
      start: e.target.value
    }, () => {
      this.calcExp();
    })
  }

  handleChangeEnd(e) {
    if (e.target.value < 0 || e.target.value > 100) return

    this.setState({
      end: e.target.value
    }, () => {
      this.calcExp();
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    let job = {
      id: Date.now(),
      owner: '-',
      pokemon: '-',
      startLevel: this.state.start,
      endLevel: this.state.end,
      exp: this.state.exp,
      cost: this.state.cost,
      notes: '-'
    }

    let newJobs = JSON.parse(localStorage.getItem('__daycare')) || [];
    newJobs.push(job);

    localStorage.setItem('__daycare', JSON.stringify(newJobs));
    this.props.update();
  }

  handleCostChange(e) {
    let val = typeof e === 'string' ? e : e.target.value
    this.setState({ ratio: val }, () => {
      this.calcExp()
    })
  }

  customValidateText(text) {
    return text.length > 0 && /^\d+$/.test(Number(text)) && Number(text) <= 300 && Number(text) >= 0;
  }

  render() {
    return (
      <div className='calc-div col-xs-12'>
        <form className='form-inline' onSubmit={this.handleSubmit} style={{ marginTop: '20px' }}>
          <div className='form-group' style={{ marginRight: '20px', display: 'inline-block' }}>
            <label htmlFor="level-start" className="control-label">From</label>
            <input
              className='form-control width-65'
              style={{ display: 'inline-block' }}
              type='number'
              name='level-start'
              value={this.state.start}
              onChange={this.handleChangeStart}/>
          </div>
          <div className='form-group' style={{ display: 'inline-block' }}>
            <label htmlFor="level-end" className="control-label">To</label>
            <input
              className='form-control width-65'
              style={{ display: 'inline-block' }}
              type='number'
              name='level-end'
              value={this.state.end}
              onChange={this.handleChangeEnd}/>
          </div>
          <div className='result'>
            <div style={{minWidth: '100px'}}>
              <div style={{ display:'inline-block', marginRight: '10px' }}>
                <strong>Cost per 1kk exp</strong>
              </div>

              <div style={{ width: '250px', display: 'inline-block' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <EasyEdit
                    type='text'
                    onValidate={this.customValidateText}
                    value={String(this.state.ratio)}
                    hideSaveButton
                    hideCancelButton
                    saveOnBlur
                    onSave={this.handleCostChange}
                  /><span>k</span>
                </div>
                <input
                  name="test"
                  style={{marginTop: '15px', marginBottom: '20px'}}
                  type='range'
                  onChange={this.handleCostChange}
                  min='1'
                  max='300'
                  value={this.state.ratio}
                >
                </input>

              </div>

            </div>

            <div>
              <h4 style={{marginTop: '15px', marginRight: '5px', display: 'inline-block'}}><strong>Total Exp:</strong></h4>
              <span style={{ marginBottom: '15px' }}>{this.state.exp}</span>
            </div>

            <div>
              <h4 style={{ display: 'inline-block', marginRight: '5px' }}><strong>Total Cost:</strong></h4>
              <span>${this.state.cost}</span>
            </div>

            <button type="submit" className="btn btn-primary submit-button" style={{ marginBottom: '10px' }}>Add to Jobs</button>

          </div>
        </form>

      </div>
    )
  }
}
