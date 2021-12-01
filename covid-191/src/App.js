import React from 'react';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ChartDayNewCase from './ChartDay/Chart_Day_NewCase';
import ChartDayTotalCase from './ChartDay/Chart_Day_TotalCase';
import ChartDayNewDeath from './ChartDay/Chart_Day_NewDeath';
import ChartDayTotalDeath from './ChartDay/Chart_Day_TotalDeath';
import ChartAllNewCase from './ChartAll/Chart_All_NewCase';
import ChartAllNewDeath from './ChartAll/Chart_All_NewDeath';
import ChartAllNewRecovered from './ChartAll/Chart_All_NewRecover';
import ChartSafety from './ChartDanger/Chart_Danger';
import ChartVaccine from './ChartVaccine/Chart_Vaccine';
import ChartCalculate from './ChartVaccine/Chart_Cal';


function App() {
  return (
    <Router>
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/chartday/chartday-newcase" component={ChartDayNewCase} />
          <Route path="/chartday/chartday-totalcase" component={ChartDayTotalCase} />
          <Route path="/chartday/chartday-newdeath" component={ChartDayNewDeath} />
          <Route path="/chartday/chartday-totaldeath" component={ChartDayTotalDeath} />
          <Route path="/chartall/chartall-newcase" component={ChartAllNewCase} />
          <Route path="/chartall/chartall-newdeath" component={ChartAllNewDeath} />
          <Route path="/chartall/chartall-newrecovered" component={ChartAllNewRecovered} />
          <Route path="/chartform" component={ChartSafety} />
          <Route path="/chartvaccine" component={ChartVaccine} />
          <Route path="/chartcalculate" component={ChartCalculate} />
        </Switch> 
    </Router>
  );
}

export default App;
