import React from 'react'
import HomeScreen from "./screens/HomeScreen";
import Registration from "./screens/Registration";
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store';
import LoginScreen from './screens/LoginScreen';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact={true} component={HomeScreen} />
          <Route path='/registration' exact={true} component={Registration} />
          <Route path='/login' exact={true} component={LoginScreen} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
