//axios it's promise http client 
import axios from 'axios';

const getProfile = (username)=>{
	return axios.get('https://api.github.com/users/' + username)
		.then((user)=> user.data
	)
}

const getRepos = (username)=>{
	return axios.get('https://api.github.com/users/'+ username + '/repos')

}

const getStarCount = (repos)=>{
	return repos.data.reduce((count, repo)=> count + repo.stargazers_count, 0)
}

const claculateScore = (profile, repos)=>{
	let followers = profile.followers;
	let totalStars = getStarCount(repos);

	return (followers * 3)+ totalStars;
}

const handleError = (error)=> {
	console.warn(error);
	return null;
}

const sortPlayers = (players)=>{
	return players.sort((a,b)=> b.score - a.score);
}

function getUserData(player) {
	return axios.all([
			getProfile(player),
			getRepos(player)])
		.then((data)=>{
			console.log(data)
			let profile = data[0];
			let repos = data[1];
			return {
				profile: profile,
				score: claculateScore(profile, repos)
			}
		})
}
module.exports = {

battle: (players)=>{
	return axios.all(players.map(getUserData))
		.then(sortPlayers)
		.catch(handleError)	
},

fetchPopularRepos : (language)=> { 
	let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
	return axios.get(encodedURI)
		.then((res)=>{
			return res.data.items;
		}
	);
}
}

