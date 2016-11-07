import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import withExampleBasename from '../withExampleBasename'

const ACTIVE = { color: 'red' }

const App = ({ children }) => (
  <div>
    <h1>APP!</h1>
    <ul className="nav nav-tabs">
      <li><IndexLink to="/"           activeStyle={ACTIVE}>Список заявок</IndexLink></li>

      <li><Link      to="/users"      activeStyle={ACTIVE}>Чат</Link></li>
     
      <li><Link      to="/about"      activeStyle={ACTIVE}>Новая заявка</Link></li>
    </ul>

    {children}
  </div>
)

const Index = () => (
  <div>
    <h2>Index!</h2>
  </div>
)

const Users = () => (
  <div>
    <h2>Users</h2>
</div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="users" component={Users}>
      </Route>
    </Route>
  </Router>
), document.getElementById('example'))
