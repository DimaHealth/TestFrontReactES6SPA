import React from 'react'
import ReactDOM from 'react-dom'
import BidItem from './Chat/biditem'
import Infotable from './Chat/infotable'
import Chatform from './Chat/chatform'
import Calculator from './Chat/calculator'
import Messages from './Chat/messages'

require('./chat/scss/chat.scss');

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [], bids: null };
//        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
      $.getJSON('./static/json/bids.json', function(data) {this.setState({bids: data})}.bind(this));

    }

    handleSubmit(e) {
       this.setState({messages: e});
    }

	render() {
    if (this.state.bids){

    var bidItems = this.state.bids.map((bid, key) => {return <BidItem bid={bid} key={key}/>});
		return (
    <div className="carcas">
      <div className="left-column_tabs">
        {bidItems}
      </div>
      <div className = "right-column_chat">
        <Infotable />
        <div className="chat-window">
          <p className="entry-message"> <span> Оганнес </span><br/>Привет родной, как дела? </p>
            <Messages messages={this.state.messages} className="message-block_example"/>
        </div>
        <div className="calculator-and-chatTextarea">
          <Calculator />
          <Chatform  onSubmit={this.handleSubmit}/>
        </div>
      </div>
    </div>
		);
    } else {
      return (
    <div className="carcas">
      <div className="left-column_tabs">
      </div>
      <div className = "right-column_chat">
        <Infotable />
        <div className="chat-window">
          <p className="entry-message"> <span> Оганнес </span><br/>Привет родной, как дела? </p>
            <Messages messages={this.state.messages} className="message-block_example"/>
        </div>
        <div className="calculator-and-chatTextarea">
          <Calculator />
          <Chatform  onSubmit={this.handleSubmit}/>
        </div>
      </div>
    </div>
        
      )
    }
	}
}

export default ChatApp;
