let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');


//	UI

class App extends React.Component {
		render(){
			return (
				<div>
					First Component	
				</div>
			)
		}
}

ReactDOM.render(
<App /> ,
	document.getElementById('app')

 );