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
    <div class="carcas">
        <div class="left-column_tabs">
            <div class="tabs-first tab-styling">
                <p> <span class="orderNumber">№4491</span> Chevrolet Avalanche <span class="dateValue">25.10.2016 </span> <span class="vinNumber">VIN не указан</span></p>
                <p class = "messageText"> ybxt </p>
            </div>
            <div class = "tabs-second tab-styling ">
                <p> <span class="orderNumber">№5000</span> Chevrolet Avalanche <span class="dateValue">30.12.2016 </span> <span class="vinNumber">BY43WQ12BC54KK321</span></p>
                <p class = "messageText"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores consequatur  </p>
            </div>
            <div class = "tabs-third tab-styling">
                <p> <span class="orderNumber">№5000</span> Bentley Continental Supersports <span class="dateValue">30.12.2016 </span> <span class="vinNumber">BY43WQ12BC54KK321</span></p>
                <p class = "messageText"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores consequatur adipisicing elit. Dolores consequatur </p>
            </div>
        </div>
        <div class = "right-column_chat">
            <div class = "right-column_title">
                <p class="tabTitle"> 
                    <span class="orderNumber">№4491</span> ВАЗ Largus <span class="vinNumber">VIN не указан </span>
                </p>
            </div>
            <table class="chat-window_table">
                <tr>
                    <td class="autoInfo">
                        <p class="autoInfo-text">
                            <span class="autoInfo-text_title">
                                Год выпуска:
                                </span> 2016
                        </p>
                        <p class="autoInfo-text">
                            <span class="autoInfo-text_title">
                                Тип кузова:
                                </span> Нет данных
                        </p>
                        <p class="autoInfo-text">
                            <span class="autoInfo-text_title">
                                Трансмиссия:
                                </span> Нет данных
                        </p>
                        <p class="autoInfo-text">
                            <span class="autoInfo-text_title">
                                Контактное имя:
                                </span> Рудиков Роман Андреевич
                        </p>
                    </td>
                    <td class="bidInfo">
                        <p class="bidInfo-text">
                            <span class="autoInfo-text_title">
                                Дата заявки:
                                </span> 20.10.2016 12:51
                        </p>
                        <p class="bidInfo-text">
                            <span class="autoInfo-text_title">
                                Технический статус:
                                </span> Оценка стоимости
                        </p>
                        <p class="bidInfo-text">
                            <span class="autoInfo-text_title">
                                Регион:
                                </span> Москва и МО
                        </p>
                        <p class="bidInfo-text">
                            <span class="autoInfo-text_title">
                                Город:
                                </span> Москва
                        </p>
                    </td>
                </tr>
            </table>
            <div class="chat-window">
                <div class="message-block_example">
                    <p class="message-block_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi omnis, impedit pariatur ut sint tempore officiis voluptate velit dolorem ullam ducimus animi eligendi nam at ea nulla voluptatibus ipsam!
                    </p>
                </div>
                <div id="send-message_form">

                </div>
            </div>
            <div class="calculator-and-chatTextarea">
                <table class="calculator-body">
                    <tr>
                        <td>
                            <p class="calcTitle">Ремонт</p>
                        </td>
                        <td><input type="number" /></td>
                        <td>
                            <p class="calcText">-</p>
                        </td>
                        <td><input type="number" /></td>
                        <td>
                            <p class="calcText">%</p>
                        </td>
                        <td><input type="number" value="26000" /></td>
                    </tr>
                    <tr>
                        <td>
                            <p class="calcTitle">Запчасти</p>
                        </td>
                        <td><input type="number" /></td>
                        <td>
                            <p class="calcText">-</p>
                        </td>
                        <td><input type="number" /></td>
                        <td>
                            <p class="calcText">%</p>
                        </td>
                        <td><input type="number" value="0" /></td>
                    </tr>
                    <tr>
                        <td class="resultRow"> <input type="number" /> </td>
                    </tr>
                </table>
                <div id="send-message_form">

                </div>
            </div>
        </div>

 
		<div>
		<textarea className="input-form" rows={6} cols={35}  type = "text" placeholder = "Вводите текст" value={this.state.value}
		onChange={this.handleChange}/>
		<button className="go" onClick={this.handleSubmit}>
		Поехали
		</button>
		{this.state.message.map((message, id) => <p id={id} className="messageIn">{message}</p>)}

		</div>
   </div>
		);
	}
}

export default Form;