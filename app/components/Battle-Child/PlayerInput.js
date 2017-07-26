import React from 'react';
import PropTypes from 'prop-types';

export default class  PlayerInput extends React.Component {
	constructor(props){
		super(props);

	this.state = {
		username: ''
	}

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event){
		let value = event.target.value;

		this.setState(()=>{
			return {
				username: value
			}
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onSubmit(
			this.props.id,
			this.state.username
			)
	}

	render(){
		return (
			<form className='column' onSubmit={this.handleSubmit}>
				<label className='header' htmlFor='label'>
					{this.props.label}
				</label>
				<input 
					id='username'
					type='text'
					placeholder='github username'
					autoComplete= 'off'
					value={this.state.username}
					onChange={this.handleChange}/>
				<button 
						className='button'
						type='submit'
						disabled={!this.state.username}>
						Submit
				</button>
			</form>
		)
	}
}

PlayerInput.PropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}