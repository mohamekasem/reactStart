import React from 'react';
import ProtoTypes from 'prop-types';
import api from '../utils/api';

//Stateless Component 
function SelectedLanguage (props){
	var languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
	return (
			<ul className='languages'>
			    {languages.map(function(lang){
				  return (
						<li style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
						 	onClick={props.onSelect.bind(null, lang)}
							key={lang}>
								{lang}
						</li>	
					)
				})}
			</ul>
		)
}


SelectedLanguage.ProtoTypes = {
	selectedLanguage : ProtoTypes.string.isRequired,
	onSelect : ProtoTypes.func.isRequired
}


class Popular extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};
		this.updateLnguage = this.updateLnguage.bind(this);
	}

	componentDidMount(){
		api.fetchPopularRepos(this.state.selectedLanguage)
			.then((res)=>{
				console.log(res)
		})
	}

	updateLnguage(lang){
		this.setState(function(){
			return {
				selectedLanguage : lang
			}
		});
	}

	render(){

		return (
			<div>
		<SelectedLanguage 
		selectedLanguage = {this.state.selectedLanguage}
		onSelect = {this.updateLnguage}
		/>
		</div>
		)
	}
}
module.exports = Popular;