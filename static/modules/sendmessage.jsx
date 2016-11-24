import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from './Chat/tabs'
import Infotable from './Chat/infotable'
import Chatform from './Chat/chatform'
import Calculator from './Chat/calculator'
import Messages from './Chat/messages'
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
//        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
       
    }

	render() {
		return (
    <div className="carcas">
        <Tabs />
        <div className = "right-column_chat">
           <Infotable />
            <div className="chat-window">
                <div className="message-block_example">
                    <Messages messages={this.state.messages} className="message-block_text"/>
                </div>
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

export default Form;
