import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from './Chat/tabs'
import Infotable from './Chat/infotable'
import Chatform from './Chat/chatform'
import Calculator from './Chat/calculator'
import Messages from './Chat/messages'

require('./chat/scss/chat.scss');

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
//        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
       this.setState({messages: e});
    }

	render() {
		return (
    <div className="carcas">
        <BidItem />
    </div>
        <div className="left-column_tabs">
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
	}
}

export default Chat;
