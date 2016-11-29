import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import Form from './modules/sendmessage'
<<<<<<< HEAD
import Newbidka from './modules/newbidka'
import BidkiList from './modules/Bidlist/bidslist'
=======
import NewBidApp from './modules/newbidapp'
import BidkiList from './modules/bidslist'
>>>>>>> origin/master
const ACTIVE = { color: 'red' }

require("./main.scss");

const App = ({ children }) => (
  <div>
    <h1>APP!</h1>
<<<<<<< HEAD
    <ul className="nav nav-tabs">
      <li><Link to="listofbids" activeStyle={ACTIVE}>Список заявок</Link></li>
      <li><Link to="chat"       activeStyle={ACTIVE}>Чат</Link></li>
      <li><Link to="newbid"     activeStyle={ACTIVE}>Новая заявка</Link></li>
    </ul>
    {children}
=======
    <div className='container'>
      <ul className="nav nav-tabs">
        <li><Link to="listofbids" activeStyle={ACTIVE}>Список заявок</Link></li>
        <li><Link to="chat"       activeStyle={ACTIVE}>Чат</Link></li>
        <li><Link to="newbid"     activeStyle={ACTIVE}>Новая заявка</Link></li>
      </ul>
      {children}
    </div>
>>>>>>> origin/master
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