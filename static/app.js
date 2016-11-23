import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import Form from './modules/sendmessage'
import Newbidka from './modules/newbidka'
import BidkiList from './modules/bidslist'
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
  <div id = 'bid-list_form' >
    <BidkiList />
  </div>
)

const Chat = () => (
  <div id='send-message_form'>
    <Form />
  </div>
)

const Newbid = () => (
  <div id='new-bid_form'>
    <Newbidka />
  </div>
)

render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="newbid" component={Newbid}/>
      <Route path="chat" component={Chat}/>
      <Route path="listofbids" component={Listofbids}/>
    </Route>
  </Router>
), document.getElementById('example'))