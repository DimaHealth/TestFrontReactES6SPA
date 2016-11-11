import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      value: '',
      message: []
    };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange() {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
    let {message, value} = this.state;
	message.push(value);
	this.setState({message, value: ''});
}
	render() {
		return (
    <div className="carcas">
        <div className="left-column_tabs">
            <div className="tabs-first tab-styling">
                <p> <span className="orderNumber">№4491</span> Chevrolet Avalanche <span className="dateValue">25.10.2016 </span> <span className="vinNumber">VIN не указан</span></p>
                <p className = "messageText"> ybxt </p>
            </div>
            <div className = "tabs-second tab-styling ">
                <p> <span className="orderNumber">№5000</span> Chevrolet Avalanche <span className="dateValue">30.12.2016 </span> <span className="vinNumber">BY43WQ12BC54KK321</span></p>
                <p className = "messageText"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores consequatur  </p>
            </div>
            <div className = "tabs-third tab-styling">
                <p> <span className="orderNumber">№5000</span> Bentley Continental Supersports <span className="dateValue">30.12.2016 </span> <span className="vinNumber">BY43WQ12BC54KK321</span></p>
                <p className = "messageText"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores consequatur adipisicing elit. Dolores consequatur </p>
            </div>
        </div>
        <div className = "right-column_chat">
            <div className = "right-column_title">
                <p className="tabTitle"> 
                    <span className="orderNumber">№4491</span> ВАЗ Largus <span className="vinNumber">VIN не указан </span>
                </p>
            </div>
            <table className="chat-window_table">
                <tr>
                    <td className="autoInfo">
                        <p className="autoInfo-text">
                            <span className="autoInfo-text_title">
                                Год выпуска:
                                </span> 2016
                        </p>
                        <p className="autoInfo-text">
                            <span className="autoInfo-text_title">
                                Тип кузова:
                                </span> Нет данных
                        </p>
                        <p className="autoInfo-text">
                            <span className="autoInfo-text_title">
                                Трансмиссия:
                                </span> Нет данных
                        </p>
                        <p className="autoInfo-text">
                            <span className="autoInfo-text_title">
                                Контактное имя:
                                </span> Рудиков Роман Андреевич
                        </p>
                    </td>
                    <td className="bidInfo">
                        <p className="bidInfo-text">
                            <span className="autoInfo-text_title">
                                Дата заявки:
                                </span> 20.10.2016 12:51
                        </p>
                        <p className="bidInfo-text">
                            <span className="autoInfo-text_title">
                                Технический статус:
                                </span> Оценка стоимости
                        </p>
                        <p className="bidInfo-text">
                            <span className="autoInfo-text_title">
                                Регион:
                                </span> Москва и МО
                        </p>
                        <p className="bidInfo-text">
                            <span className="autoInfo-text_title">
                                Город:
                                </span> Москва
                        </p>
                    </td>
                </tr>
            </table>
            <div className="chat-window">
                <div className="message-block_example">
                    <p className="message-block_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi omnis, impedit pariatur ut sint tempore officiis voluptate velit dolorem ullam ducimus animi eligendi nam at ea nulla voluptatibus ipsam!
                    </p>
                </div>
                <div id="send-message_form">
		<textarea className="input-form" rows={6} cols={35}  type = "text" placeholder = "Вводите текст" value={this.state.value}
		onChange={this.handleChange}/>
		<button className="go" onClick={this.handleSubmit}>
		Поехали
		</button>
		{this.state.message.map((message, id) => <p id={id} className="messageIn">{message}</p>)}

                </div>
            </div>
            <div className="calculator-and-chatTextarea">
                <table className="calculator-body">
                    <tr>
                        <td>
                            <p className="calcTitle">Ремонт</p>
                        </td>
                        <td><input type="number" /></td>
                        <td>
                            <p className="calcText">-</p>
                        </td>
                        <td><input type="number" /></td>
                        <td>
                            <p className="calcText">%</p>
                        </td>
                        <td><input type="number" value="26000" /></td>
                    </tr>
                    <tr>
                        <td>
                            <p className="calcTitle">Запчасти</p>
                        </td>
                        <td><input type="number" /></td>
                        <td>
                            <p className="calcText">-</p>
                        </td>
                        <td><input type="number" /></td>
                        <td>
                            <p className="calcText">%</p>
                        </td>
                        <td><input type="number" value="0" /></td>
                    </tr>
                    <tr>
                        <td className="resultRow"> <input type="number" /> </td>
                    </tr>
                </table>
                <div id="send-message_form">
                </div>
            </div>
        </div>
   </div>
		);
	}
}

export default Form;