import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './calculator'

class Chatform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      value: '',
      message: []
    };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
    let {message, value} = this.state;
	message.push(value);
	this.setState({message, value: ''});
}
	render() {
		return (
		<div className="chat-message_block">
		<textarea required className="input-form" rows={6} cols={35}  type = "text" placeholder = "Вводите текст" value={this.state.value}
		onChange={this.handleChange}/>
		<button className="go" onClick={this.handleSubmit}>
		Поехали
		</button>
        {this.state.message.map((message, id) => <p key={id} className="sweet">{message}</p>)}
		<Calculator />
		</div>
		
		);
	}
}
export default Chatform;