import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import {Link} from 'react-router-dom'
import Player from './results-Child/Player'

class Results extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			winner: null,
			loser: null,
			error: null,
			loading: true
		}
	}
	componentDidMount(){
		let players = queryString.parse(this.props.location.search);
		api.battle([
			players.playerOneName,
			players.playerTowName
		])
		.then((result)=>{
			if(result === null){
				return this.setState(()=>{	
					return {
						error: 'Looks like there was errror. Check that both users exist on Github',
						loading: false,
					}
				})
			}
			this.setState(()=>{
				return {
					error: null,
					winner: result[0],
					loser: result[1],
					loading: false

				}
			})

		});
	}
		
	render(){
		let error = this.state.error;
		let winner = this.state.winner;
		let loser = this.state.loser;
		let loading = this.state.loading;

		if(loading === true){
			return <p>Loading</p>
		}

		if(error){
			return (<div><p>{error}</p>
				<Link to="/battle">Reset</Link>
				</div>)
		}
		return(
			<div className='row'>
			<Player 
				label= ' Winner'
				score={winner.score}
				profile={winner.profile}
				/>
				<Player 
				label= 'Loser'
				score={loser.score}
				profile={loser.profile}
				/>
			 </div>
		)
	}
}
export default Results;