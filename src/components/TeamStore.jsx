import React, { Component } from 'react'
import Pokemon from './Pokemon'

export default class TeamStore extends Component {
	constructor() {
		super()

		this.state = {
			currentlySelected: undefined
		}

		document.querySelector('body').style.overflow = 'hidden'

		this.onBoxSelect = this.onBoxSelect.bind(this)
		this.onFinishSearch = this.onFinishSearch.bind(this)
	}

	onBoxSelect(no) {
		this.setState({ currentlySelected: no })
	}

	onFinishSearch() {
		this.setState({ currentlySelected: undefined })
	}

	render() {
		return (
			<div style={{ display: 'flex', position: 'absolute', top: 0, left: 0  }}>
				<Pokemon id={1} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} onFinishSearch={this.onFinishSearch} />
				<Pokemon id={2} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} onFinishSearch={this.onFinishSearch} />
				<Pokemon id={3} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} onFinishSearch={this.onFinishSearch} />
				<Pokemon id={4} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} onFinishSearch={this.onFinishSearch} />
				<Pokemon id={5} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} onFinishSearch={this.onFinishSearch} />
				<Pokemon id={6} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} onFinishSearch={this.onFinishSearch} />
			</div>
		)
	}
}