import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);
export default App;
