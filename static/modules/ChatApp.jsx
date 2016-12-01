import React from 'react'
import ReactDOM from 'react-dom'
import BidItem from './Chat/biditem'
import BidItemInfo from './Chat/biditeminfo'

require('./chat/scss/chat.scss');

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [], bids: null, selected: null };
        this.onSendMessage = this.onSendMessage.bind(this);
        this.onBidItemSelect = this.onBidItemSelect.bind(this);

    }

    componentDidMount(){
      $.getJSON('./static/json/bids.json', function(data) {this.setState({bids: data})}.bind(this));

    }

    onSendMessage(e) {
      let data = this.state.bidinfo;
      console.log(e);
      data.messages.push(e);
      this.setState({bidinfo: data});
    }

    onBidItemSelect(e) {
      $.getJSON('./static/json/' + e + '.json', function(data) {this.setState({bidinfo: data, selected: e})}.bind(this));
    }

	render() {
    if (this.state.bids){

    var bidItems = this.state.bids.map((bid, key) => {
      if (bid.bid_id==this.state.selected){
        return  <BidItem bid={bid} key={key} onClick={this.onBidItemSelect} style = 'tab-styling_selected'/>  
      } else {
        return  <BidItem bid={bid} key={key} onClick={this.onBidItemSelect} style = 'tab-styling'/>
      }});
      
		return (
    <div className="carcas">
      <div className="left-column_tabs">
        {bidItems}
      </div>
      <BidItemInfo messages={this.state.messages} onSendMessage={this.onSendMessage} bidinfo={this.state.bidinfo}/>
    </div>
		);
    } else {
      return (
    <div className="carcas">
      <div className="left-column_tabs">
      </div>
      <div className = "right-column_chat">
      </div>
    </div>
        
      )
    }
	}
}

export default ChatApp;
