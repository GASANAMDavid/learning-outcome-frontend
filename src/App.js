import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import MatrixTable from './components/dashboard/MatrixTable';
import History from './components/dashboard/History';

const App = () => (
  <Router>
    <Dashboard>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard/matrix_table" component={MatrixTable} />
        <Route exact path="/dashboard/history" component={History} />
      </Switch>
    </Dashboard>
  </Router>
);

export default App;
