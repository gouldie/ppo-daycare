import React, { Component } from 'react'
import InlineEdit from 'react-edit-inline'

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

  componentWillMount() {
    localStorage.getItem('__daycare') &&
    this.setState({
      jobs: JSON.parse(localStorage.getItem('__daycare'))
    })
  }

  calcExp() {
    const exp = [54,59,
      64,
      70,
      80,
      95,
      120,
      157,
      212,
      291,
      398,
      542,
      729,
      967,
      1267,
      1636,
      2086,
      2628,
      3273,
      4034,
      4924,
      5957,
      7147,
      8509,
      10061,
      11817,
      13797,
      16017,
      18497,
      21256,
      24314,
      27692,
      31413,
      35498,
      39970,
      44853,
      50171,
      55950,
      62216,
      68995,
      76314,
      84201,
      92686,
      101797,
      111564,
      122019,
      133193,
      145118,
      157827,
      171353,
      185732,
      200997,
      217186,
      234333,
      252478,
      271656,
      291908,
      313271,
      335787,
      359496,
      384439,
      410658,
      438197,
      467098,
      497407,
      529167,
      562425,
      597226,
      633619,
      671651,
      711369,
      752824,
      796065,
      841144,
      888110,
      937016,
      987915,
      1040861,
      1095907,
      1153108,
      1212520,
      1274198,
      1338201,
      1404585,
      1473409,
      1544733,
      1618615,
      1695116,
      1774297,
      1856221,
      1940950,
      2028547,
      2119076,
      2212602,
      2309190,
      2408907,
      2511819,
      2617994,
      2727501]
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
    let val = e.message || e.target.value
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
                <InlineEdit
                  staticElement="strong"
                  validate={this.customValidateText}
                  text={String(this.state.ratio)}
                  paramName="message"
                  change={this.handleCostChange}
                />k
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
