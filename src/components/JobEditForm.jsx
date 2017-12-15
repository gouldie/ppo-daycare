import React, { Component } from 'react'

export default class JobEditForm extends Component {
  constructor(props) {
    super(props);

    var {
      id,
      owner,
      pokemon,
      startLevel,
      endLevel,
      exp,
      cost,
      notes,
      handleEdit } = props;

    this.state = {
      owner,
      pokemon,
      startLevel,
      endLevel,
      exp,
      cost,
      notes
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onOwnerChange = this.onOwnerChange.bind(this);
    this.onPokemonChange = this.onPokemonChange.bind(this);
    this.onStartLevelChange = this.onStartLevelChange.bind(this);
    this.onEndLevelChange = this.onEndLevelChange.bind(this);
    this.onExpChange = this.onExpChange.bind(this);
    this.onCostChange = this.onCostChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
  }

  onSubmit() {
    let id = this.props.id;
    let handleEdit = this.props.handleEdit;
    let newOwner = this.state.owner;
    let newPokemon = this.state.pokemon;
    let newStartLevel = this.state.startLevel;
    let newEndLevel = this.state.endLevel;
    let newExp = this.state.exp;
    let newCost = this.state.cost;
    let newNotes = this.state.notes;

    let newJob = {
      id,
      owner: newOwner,
      pokemon: newPokemon,
      startLevel: newStartLevel,
      endLevel: newEndLevel,
      exp: newExp,
      cost: newCost,
      notes: newNotes
    }
    console.log(newJob)
    handleEdit(newJob.id, newJob)
  }

  onOwnerChange(e) {
    this.setState({ owner: e.target.value })
  }

   onPokemonChange(e) {
    this.setState({ pokemon: e.target.value })
  }

   onStartLevelChange(e) {
    this.setState({ startLevel: e.target.value })
  }

   onEndLevelChange(e) {
    this.setState({ endLevel: e.target.value })
  }

   onExpChange(e) {
    this.setState({ exp: e.target.value })
  }

   onCostChange(e) {
    this.setState({ cost: Number((e.target.value).replace(/\D/g,'')) })
  }

   onNotesChange(e) {
    this.setState({ notes: e.target.value })
  }

  render() {
    return (
      <div className="modal fade" id={"modal" + this.props.id} tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <form className="form-horizontal job-edit-top">
              <div className="form-group">
                <label htmlFor="inputOwner" className="col-xs-offset-1 col-xs-2 control-label">Owner</label>
                <div className="col-xs-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputOwner"
                    placeholder="Owner"
                    value={this.state.owner}
                    onChange={this.onOwnerChange}
                    />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputPokemon" className="col-xs-offset-1 col-xs-2 control-label">Pokemon</label>
                <div className="col-xs-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPokemon"
                    placeholder="Pokemon"
                    value={this.state.pokemon}
                    onChange={this.onPokemonChange}
                    />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputStartLevel" className="col-xs-offset-1 col-xs-2 control-label">Start Level</label>
                <div className="col-xs-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputStartLevel"
                    placeholder="Start Level"
                    value={this.state.startLevel}
                    onChange={this.onStartLevelChange}
                    />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputEndLevel" className="col-xs-offset-1 col-xs-2 control-label">End Level</label>
                <div className="col-xs-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEndLevel"
                    placeholder="End Level"
                    value={this.state.endLevel}
                    onChange={this.onEndLevelChange}
                    />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputExp" className="col-xs-offset-1 col-xs-2 control-label">Exp</label>
                <div className="col-xs-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputExp"
                    placeholder="Exp"
                    value={this.state.exp}
                    onChange={this.onExpChange}
                    />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputCost" className="col-xs-offset-1 col-xs-2 control-label">Cost</label>
                <div className="col-xs-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputCost"
                    placeholder="Cost"
                    value={this.state.cost}
                    onChange={this.onCostChange}
                    />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputNotes" className="col-xs-offset-1 col-xs-2 control-label">Notes</label>
                <div className="col-xs-8">
                  <input
                    maxLength="30"
                    type="text"
                    className="form-control"
                    id="inputNotes"
                    placeholder="Notes"
                    value={this.state.notes}
                    onChange={this.onNotesChange}
                    />
                </div>
              </div>
              <div className="form-group text-align-center">
                <button
                  type="submit"
                  className="btn btn-success edit-save-button"
                  data-dismiss="modal"
                  onClick={this.onSubmit}
                  >Save</button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  >Back</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
