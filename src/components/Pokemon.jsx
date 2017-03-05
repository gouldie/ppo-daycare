import React, { Component } from 'react'

const pokemon = ['squirtle', 'wartortle', 'blastoise']

export default class Pokemon extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pokemon: undefined,
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
				console.log('saddsasda')
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
		
	}

	render() {
		const {
			id,
			currentlySelected
		} = this.props

		const {
			pokemon
		} = this.state

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
					pokemon ?
						<img
							src={`style/pokemon/${pokemon}.png`}
							alt="Pokemon"
							style={{ width: '90px', height: '90px', marginTop: '5px' }}
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