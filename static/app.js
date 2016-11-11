import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import withExampleBasename from '../withExampleBasename'

const ACTIVE = { color: 'red' }

const App = ({ children }) => (
  <div>
    <h1>APP!</h1>
    <ul className="nav nav-tabs">
      <li><Link to="listofbids" activeStyle={ACTIVE}>Список заявок</Link></li>
      <li><Link to="chat"       activeStyle={ACTIVE}>Чат</Link></li>
      <li><Link to="newbid"     activeStyle={ACTIVE}>Новая заявка</Link></li>
    </ul>

    {children}
  </div>
)

const Listofbids = () => (
  <div>
    <h2>Заявки</h2>
  </div>
)

const Chat = () => (
  <div>
    <h2>Чат</h2>
</div>
)

const Newbid = () => (
  <div>
    <h2>Новая заявка</h2>
  </div>
)

render((
  <Router history={browserHistory/*withExampleBasename(browserHistory, __dirname)*/}>
    <Route path="/" component={App}>
      <Route path="newbid" component={Newbid}/>
      <Route path="chat" component={Chat}/>
      <Route path="listofbids" component={Listofbids}/>
    </Route>
  </Router>
), document.getElementById('example'))