import React, { Component } from 'react';
import moment from 'moment'

class Messages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var messages = this.props.messages.map((message, key) => {
      if (message.m != '') {


        return (
          <p key={key} className="send-messages">

            <span> {message.date} </span><br />

            {message.m}
          </p>
        )
      }
    })

    return (
      <div>
        {messages}
      </div>
    );

  }
}

export default Messages;