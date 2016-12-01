import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

class Chatform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};//, message: [{m:'', date:''}]
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
//	message.push({m:value, date:moment().locale("ru").format('DD.MM.YY, h:mm:ss')});
	this.props.onSubmit({message: this.state.value, user_name:'Автосервис'});
	console.log(event.target);
	this.setState({value: ''});
}
	render() {
		return (
		<div className="chat-message_block">
		<textarea required className="input-form" rows={6} cols={35}  type = "text" placeholder = "Вводите текст" value={this.state.value}
		onChange={this.handleChange}/>
		<button className="go" onClick={this.handleSubmit}>
		Отправить
		</button>
		</div>
		
		);
	}
}
export default Chatform;