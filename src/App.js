import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
);
export default App;
