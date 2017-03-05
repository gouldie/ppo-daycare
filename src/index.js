import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import TeamStore from './components/TeamStore.jsx'
import { Router, Route, hashHistory } from 'react-router'

//ReactDOM.render(<App />, document.querySelector('.container'))

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/team" component={TeamStore}/>
	</Router>,
	document.querySelector('.container')
)