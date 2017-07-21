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
    const exp = [54,59,64,71,81,97,123,164,224,309,427,584,788,1050,1378,1783,2276,2870,3577,4411,5387,6519,7824,9319,11020,12947,15118,17554,20274,23300,26655,30361,34442,38923,43828,49185,55019,61359,68233,75669,83698,92351,101659,111654,122369,133838,146096,159179,173121,187960,203734,220482,238241,257053,276959,297999,320216,343653,368354,394364,421729,450493,480705,512412,545662,580505,616992,655172,695097,736820,780395,825874,873313,922767,974293,1027947,1083787,1141873,1202262,1265016,1330196,1397862,1468078,1540907,1616413,1694660,1775715,1859642,1946511,2036388,2129343,2225444,2324762,2427367,2533333,2642730,2755634,2872116,2992254];
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
        <form className='form-horizontal col-sm-offset-3 col-sm-2' onSubmit={this.handleSubmit} style={{ marginLeft: '' }}>
          <div className='form-group calc-width'>
            <label htmlFor="level-start" className="control-label">Start</label>
            <div>
              <input
                className='form-control'
                type='number'
                name='level-start'
                value={this.state.start}
                onChange={this.handleChangeStart}/>
            </div>
          </div>
          <div className='form-group calc-width'>
            <label htmlFor="level-end" className="control-label">End</label>
            <div>
              <input
                className='form-control'
                type='number'
                name='level-end'
                value={this.state.end}
                onChange={this.handleChangeEnd}/>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary submit-button">Add to Jobs</button>
          </div>
        </form>
        <div className='result col-sm-3'>
          <h5 style={{marginTop: '15px'}}><em>Exp Required</em></h5>
          <p style={{ marginBottom: '15px' }}>{this.state.exp}</p>
          <h5 style={{minWidth: '100px'}}>
            <em>Cost (</em>

            <InlineEdit
              staticElement="em"
              validate={this.customValidateText}
              text={String(this.state.ratio)}
              paramName="message"
              change={this.handleCostChange}
            />

            <em>k/1kk)</em>
            <input
              style={{marginTop: '20px', marginBottom: '20px'}}
              type='range'
              onChange={this.handleCostChange}
              min='1'
              max='300'
              value={this.state.ratio}
            >
            </input>
          </h5>
          <p>${this.state.cost}</p>
        </div>
      </div>
    )
  }
}
