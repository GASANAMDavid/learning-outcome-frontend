import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import CurrentMatrix from './components/dashboard/CurrentMatrix';
import History from './components/dashboard/History';
import Snackbar from './components/alert/Snackbar';
import PrivateRoute from './components/private-route/PrivateRoute';
import Account from './components/dashboard/user-management/account';
import Users from './components/dashboard/user-management/users';

const App = () => (
  <>
    <Snackbar />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard/current_matrix">
          <Dashboard>
            <CurrentMatrix />
          </Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/history">
          <Dashboard>
            <History />
          </Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/account">
          <Dashboard>
            <Account />
          </Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/users">
          <Dashboard>
            <Users />
          </Dashboard>
        </PrivateRoute>
      </Switch>
    </Router>
  </>
);

export default App;
