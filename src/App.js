import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import CurrentMatrix from './components/dashboard/CurrentMatrix';
import History from './components/dashboard/History';
import Snackbar from './components/alert/Snackbar';

const App = () => (
  <>
    <Snackbar />
    <Router>
      <Dashboard>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard/matrix_table" component={CurrentMatrix} />
          <Route exact path="/dashboard/history" component={History} />
        </Switch>
      </Dashboard>
    </Router>
  </>
);

export default App;
