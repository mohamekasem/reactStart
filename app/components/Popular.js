import React from 'react';
import ProtoTypes from 'prop-types';
import api from '../utils/api';

// import the child components
import RepoGrid from './popular-Child/Repo-Grid';
import SelectLanguage from './popular-Child/SelectLanguages';

// import Reusable Component
import Loading from './Loading'
export default class Popular extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount() {
	this.updateLanguage(this.state.selectedLanguage);		
	}

	updateLanguage(lang) {
		this.setState(()=> {
			return {
				selectedLanguage : lang,
				repos: null
			}
		});

		api.fetchPopularRepos(lang)
			.then((repos)=>{
				this.setState(()=>{
					return {
						repos: repos
					}
				})
		})
	}


	render() {
		return (
			<div>
				<SelectLanguage 
					selectedLanguage = {this.state.selectedLanguage}
					onSelect = {this.updateLanguage}
				/>
				{!this.state.repos ? <Loading />
				:<RepoGrid repos={this.state.repos} />
				}
			</div>
		)
	}
}

