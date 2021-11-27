import React from 'react';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ChartDay from './Chart_Day';
import ChartAll from './Chart_All';
import ChartForm from './Chart_Form';


function App() {
  return (
    <Router>
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/chartday" component={ChartDay} />
          <Route path="/chartall" component={ChartAll} />
          <Route path="/chartform" component={ChartForm} />
        </Switch> 
    </Router>
  );
}

export default App;
