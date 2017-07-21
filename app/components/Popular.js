import React from 'react';

class Popular extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};
		this.updateLnguage = this.updateLnguage.bind(this);

	}

	updateLnguage(lang){
		this.setState(function(){
			return {
				selectedLanguage : lang
			}
		});
	}

	render(){
		
		var languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
		return (
			<ul className='languages'>
			    {languages.map(function(lang){
				  return (
						<li style={lang === this.state.selectedLanguage ? {color: '#d0021b'}: null}
						 	onClick={this.updateLnguage.bind(null, lang)}
							key={lang}>
								{lang}
						</li>	
					)
				},this)}
			</ul>
		)
	}
}
module.exports = Popular;