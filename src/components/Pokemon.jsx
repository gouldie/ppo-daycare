import React, { Component } from 'react'

const order = ['healthy', 'pois', 'burn', 'para', 'sleep', 'freeze', 'dead']
const pokemon = ['squirtle', 'wartortle', 'blastoise']

export default class Pokemon extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pokemon: undefined,
			status: 'healthy',
			search: ''
		}

		this.onInputChange = this.onInputChange.bind(this)
		this.onInputSubmit = this.onInputSubmit.bind(this)
	}

	onInputChange(e) {
		this.setState({ search: e.target.value })
	}

	onInputSubmit(e) {
		if(e.keyCode == 13) {
			if (pokemon.indexOf(e.target.value) > -1) {
				console.log('pokemon found')
				this.setState({ pokemon: e.target.value, search: '' })
				this.props.onFinishSearch()
			} else {
				console.log('no pokemon found')
			}
		}
	}

	onPokeballSelect() {
		if (this.props.id === this.props.currentlySelected) {
			this.props.onBoxSelect(7)
		} else {
			this.props.onBoxSelect(this.props.id)
			setTimeout(() => {
				document.querySelector('input').focus()
			})
		}
	}

	onPokemonSelect() {
		const current = this.state.status
		const index = order.indexOf(current)
		let newStatus

		if (index >= 0 && index < order.length) {
			if (index === order.length - 1) {
				newStatus = order[0]
			} else {
				newStatus = order[index + 1]
			}
		}

		this.setState({ status: newStatus })
	}

	render() {
		const {
			id,
			currentlySelected
		} = this.props

		const {
			pokemon,
			status
		} = this.state

		console.log(status)

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
				{
					(status === 'pois' || status === 'burn' || status === 'sleep' || status === 'freeze' || status === 'para') &&
					<img
						src={`style/status/${status}.png`}
						alt="Status"
						style={{ width: '40px', height: '40px', position: 'absolute' }} />
				}

				{
					pokemon ?
						<img
							src={`style/pokemon/${pokemon}.png`}
							alt="Pokemon"
							style={{ width: '76px', height: '76px', marginTop: '12px', opacity: status === 'dead' ? '0.3' : '1' }}
							onClick={() => this.onPokemonSelect()} />
						:
						<img
							src={`style/pokeball.png`}
							alt="Pokeball"
							style={{ width: '50px', height: '50px', marginTop: '25px' }}
							onClick={() => this.onPokeballSelect()} />
				}



				{
					id === currentlySelected &&
					<input
						className='search-input form-control'
						type='text'
						value={this.state.search}
						style={{ height: '20px' }}
					  onChange={this.onInputChange}
						onKeyDown={this.onInputSubmit}
					/>
				}
			</div>
		)
	}
}

{/*<div style={{ width: '100px', height: '20px', backgroundColor: 'turquoise' }}>*/}
	{/**/}
{/*</div>*/}