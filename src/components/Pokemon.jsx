import React, { Component } from 'react'

export default class Pokemon extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pokemon: undefined,
			selected: false,
			search: ''
		}

		this.onInputChange = this.onInputChange.bind(this)
	}

	onInputChange(e) {
		this.setState({ search: e.target.value })
	}

	onInputSubmit(e) {

	}

	onBoxSelect() {
		if (this.props.id === this.props.currentlySelected) {
			this.props.onBoxSelect(7)
		} else {
			this.props.onBoxSelect(this.props.id)
		}
	}

	render() {
		const {
			id,
			currentlySelected,
			onBoxSelect
		} = this.props

		return (
			<div
				style={{
					width: '100px',
					height: '100px',
					backgroundColor: 'lavender',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-between' }}
			>
				<img src="style/pokeball.png" alt="Pokeball" style={{ width: '50px', height: '50px', marginTop: '25px' }} onClick={() => this.onBoxSelect(id)} />
				{
					id === currentlySelected &&
					<input
						className='search-input form-control'
						type='text'
						value={this.state.search}
						style={{ height: '20px' }}
					  onChange={this.onInputChange}
					/>
				}
			</div>
		)
	}
}

{/*<div style={{ width: '100px', height: '20px', backgroundColor: 'turquoise' }}>*/}
	{/**/}
{/*</div>*/}