import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ChartDay from './ChartDay';


function App() {
  return (
    <Router>
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/chartday" component={ChartDay} />
        </Switch> 
    </Router>
  );
}

export default App;
