import React from 'react'
import Chatform from './components/chatform'
import Calculator from './components/calculator'
import Messages from './components/messages'



class BidItemInfo extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if(this.props.bidinfo){
    return (
      <div className = "right-column_chat">
          <div className="tab-details">
            <p><span className="orderNumber-details">{this.props.bidinfo.bid_info.bid_id}</span>{this.props.bidinfo.bid_info.auto_brand} {this.props.bidinfo.bid_info.auto_model}
            <span className="icon"> </span><span className="vinNumber">{this.props.bidinfo.bid_info.auto_vnumber}</span></p>
            <p className="bidWriting-details">Описание работ: {this.props.bidinfo.bid_info.description}</p>

            <table className="chat-window_table">
              <tbody>
                <tr>
                  <td className="autoInfo">
                    <p className="autoInfo-text"><span className="autoInfo-text_title">Год выпуска:</span> 2016</p>
                    <p className="autoInfo-text"><span className="autoInfo-text_title">Тип кузова:</span> Нет данных</p>
                    <p className="autoInfo-text"><span className="autoInfo-text_title">Трансмиссия:</span> Нет данных</p>
                    <p className="autoInfo-text"><span className="autoInfo-text_title">Контактное имя:</span> Рудиков Роман Андреевич</p>
                  </td>
                  <td className="bidInfo">
                    <p className="bidInfo-text"><span className="autoInfo-text_title">Дата заявки:</span> 20.10.2016 12:51</p>
                    <p className="bidInfo-text"><span className="autoInfo-text_title">Технический статус:</span> Оценка стоимости</p>
                    <p className="bidInfo-text"><span className="autoInfo-text_title">Регион:</span> Москва и МО</p>
                    <p className="bidInfo-text"><span className="autoInfo-text_title">Город:</span> Москва</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        <div className="chat-window">
          <p className="entry-message"> <span> Оганнес </span><br/>Привет родной, как дела? </p>
            <Messages messages={this.props.messages} className="message-block_example"/>
        </div>
        <div className="calculator-and-chatTextarea">
          <Calculator />
          <Chatform  onSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  } else {
    return(<div className = "right-column_chat"><p>Выберите заявку</p></div>);
  }}
}

export default BidItemInfo;