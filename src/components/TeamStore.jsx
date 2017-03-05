import React, { Component } from 'react'
import Pokemon from './Pokemon'

export default class TeamStore extends Component {
	constructor() {
		super()

		this.state = {
			currentlySelected: undefined
		}

		this.onBoxSelect = this.onBoxSelect.bind(this)
	}

	onBoxSelect(no) {
		this.setState({ currentlySelected: no })
	}

	render() {
		return (
			<div style={{ marginTop: '60px', display: 'flex' }}>
				<Pokemon id={1} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} />
				<Pokemon id={2} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} />
				<Pokemon id={3} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} />
				<Pokemon id={4} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} />
				<Pokemon id={5} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} />
				<Pokemon id={6} currentlySelected={this.state.currentlySelected} onBoxSelect={this.onBoxSelect} />
			</div>
		)
	}
}