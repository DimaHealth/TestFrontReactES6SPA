import React, {Component} from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);
  }
  render() {
          var messages = this.props.messages.map((message) => {
            return (
                <p>{message}</p>
            )
          })
    
    return (
      <div>
         {messages}       
      </div>
    );
  }
}

export default Messages;