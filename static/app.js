import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import Form from './modules/sendmessage'
import NewBidApp from './modules/newbidapp'
import BidkiList from './modules/bidlistapp'

const ACTIVE = { color: 'red' }

require("./main.scss");

const App = ({ children }) => (
  <div>
    <h1>APP!</h1>
    <div className='container'>
      <ul className="nav nav-tabs">
        <li><Link to="listofbids" activeStyle={ACTIVE}>Список заявок</Link></li>
        <li><Link to="chat"       activeStyle={ACTIVE}>Чат</Link></li>
        <li><Link to="newbid"     activeStyle={ACTIVE}>Новая заявка</Link></li>
      </ul>
      {children}
    </div>
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
    <NewBidApp />
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