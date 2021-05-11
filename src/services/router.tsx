 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import React from'react';
import Home from '../pages/Home/App';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav" >
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>TODO about</h2>;
}

function Users() {
  return <h2>TODO Users</h2>;
}