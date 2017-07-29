import React from 'react';
import PropTypes from 'prop-types';
import PlayerPreview from '../Battle-Child/Player-Preview'

const Profile = (props)=>{
let info = props.info;

  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      <ul className='space-list-items'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
    )
}
Profile.PropTypes = {
	info: PropTypes.object.isRquired
}

 const Player = (props)=> {
		return (
			<div>
				<h1>{props.label}</h1>
				<h3 style={{textAlign: 'centr'}}>Score: {props.score}</h3>	
				<Profile
					info={props.profile}
					/>
			</div>
		)
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
}
export default Player;