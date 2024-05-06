import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MongoInstances from './components/MongoInstances';
import Databases from './components/Databases';
import Users from './components/Users';
import SignIn from './components/SignIn';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mongo-instances" component={MongoInstances} />
        <Route path="/databases" component={Databases} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={SignIn} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;