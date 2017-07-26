import React from 'react';
import PropTypes from 'prop-types';


function PlayarPreview (props){
	return (
		<div>
			<div className='column'>
				<img 
					className='avatar'
					src={props.avatar}
					alt={'Avatar for' + props.username}
				/>
				<h2 className='username'>@{props.username}</h2>
			</div>
			<button 
				className='reset'
				onClick={props.onReset.bind(null, props.id)}>
				Reset
			</button>
		</div>
	)
}

PlayarPreview.PropTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	id:PropTypes.string.isRequired,
	onReset:PropTypes.func.isRequired
}

export default PlayarPreview;