import React, { Component } from 'react';
import moment from 'moment'

class Messages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.messages){
    var messages = this.props.messages.map((message, key) => {
      if (message.send_role == 1) {
        return (<p className="entry-message" key={key}> <span> {message.user_name} </span><br/>{message.message}</p>)
      } else {
        return (<p className="send-messages" key={key}> <span> {message.user_name} </span><br/>{message.message}</p>)
      }
    })
    console.log(messages);
    return (<div>{messages}</div>);
    } else{
      return null
    }
  }
}

export default Messages;