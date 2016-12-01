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
      var date = new Date(Number(this.props.bidinfo.bid_info.current_time)*1000);
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
                    <p className="autoInfo-text"><span className="autoInfo-text_title">Год выпуска: </span>{this.props.bidinfo.bid_info.auto_year}</p>
                    <p className="autoInfo-text"><span className="autoInfo-text_title">Тип кузова: </span>{this.props.bidinfo.bid_info.auto_modify_name}</p>
                    <p className="autoInfo-text"><span className="autoInfo-text_title">Трансмиссия:</span>{this.props.bidinfo.bid_info.auto_transmission_value}</p>
                    <p className="autoInfo-text"><span className="autoInfo-text_title">Контактное имя: </span>{this.props.bidinfo.bid_info.u_name}</p>
                  </td>
                  <td className="bidInfo">
                    <p className="bidInfo-text"><span className="autoInfo-text_title">Дата заявки: </span>{date.getDate()}.{date.getMonth()}.{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</p>
                    <p className="bidInfo-text"><span className="autoInfo-text_title">Технический статус: </span>{this.props.bidinfo.bid_info.change_status_name}</p>
                    <p className="bidInfo-text"><span className="autoInfo-text_title">Регион: </span>{this.props.bidinfo.bid_info.bid_region_name}</p>
                    <p className="bidInfo-text"><span className="autoInfo-text_title">Город: </span>{this.props.bidinfo.bid_info.bid_city_name}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        <div className="chat-window">
            <Messages messages={this.props.bidinfo.messages} className="message-block_example"/>
        </div>
        <div className="calculator-and-chatTextarea">
          <Calculator />
          <Chatform  onSubmit={this.props.onSendMessage}/>
        </div>
      </div>
    );
  } else {
    return(<div className = "right-column_chat"><p className="chooseTheBid">Выберите заявку</p></div>);
  }}
}

export default BidItemInfo;
//          <p className="entry-message"> <span> Оганнес </span><br/>Привет родной, как дела? </p>
