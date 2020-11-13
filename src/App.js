import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './router';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/Images">Images</Link>
          </li>
          <li>
            <Link to="/tacos">Buttons1</Link>
          </li>
        </ul>

        <Switch>
            {routes.map((route, i) => (
                <Route key={i} path={route.path} component={()=>{route.component}} />
            ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
