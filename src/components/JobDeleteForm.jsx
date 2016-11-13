import React, { Component } from 'react'

export default class JobDeleteForm extends Component {
  constructor(props) {
    super(props);

    this.del = this.del.bind(this)
  }

  del() {
    this.props.handleDelete(this.props.id)
  }

  render() {
    return (
      <div className="modal fade" id={"modaldel" + this.props.id} tabIndex="-2" role="dialog" aria-labelledby="mySmallModalLabel">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <form className="form-horizontal job-edit-top">
              <div className="form-group text-align-center">
                <h2 style={{margin: '20px 30px'}}>Are you sure you want to delete this job?</h2>
                <button
                  type="submit"
                  className="btn btn-danger edit-save-button"
                  data-dismiss="modal"
                  onClick={this.del}
                  >Delete</button>
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
