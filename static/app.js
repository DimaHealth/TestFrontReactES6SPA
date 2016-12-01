import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import ChatApp from './modules/chatapp'
import NewBidApp from './modules/newbidapp'
import BidkiList from './modules/bidlistapp'



require("./main.scss");

const App = ({ children }) => (
  <div>
    <h1>APP!</h1>
    <div className='container'>
      <ul className="nav nav-tabs">
        <li><Link to="listofbids" activeClassName='nav-tabs_active'>Список заявок</Link></li>
        <li><Link to="chat"      activeClassName='nav-tabs_active'>Чат</Link></li>
        <li><Link to="newbid"     activeClassName='nav-tabs_active'>Новая заявка</Link></li>
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
    <ChatApp />
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
), document.getElementById('appRoot'))