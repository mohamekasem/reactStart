import React from 'react';
// import ReactRouter from 'react-router-dom';
// Route Dependencies
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';
//components rendering
import Nav from './Nav';
import Home from './Home';
import Popular from './Popular';
import Battle from './Battle';


class App extends React.Component {
  render(){
    return (
    	<Router>
     	   <div className='container'>
     	   	<Nav />
          <Switch>
      		 <Route exact path= '/' component= {Home}/>
      		 <Route exact path= '/battle' component= {Battle}/>
      		 <Route path= '/popular' component= {Popular}/>
           <Route render= {()=>{
            return <p>Not Found</p>
           }} />
           </Switch>
       	    </div>
    	</Router>
      )
  }
}

module.exports = App;