import React from 'react'
import ReactDOM from 'react-dom'

class BidRow extends React.Component {
  
    render() {
        return (
                <tr className="table-row">
                    <td className="table-row_column">
                        {this.props.number}
                    </td>
                    <td className="table-row_column">
                        {this.props.date}
                    </td>
                    <td className="table-row_column">
                        {this.props.car}
                    </td>
                    <td className="table-row_column">
                        {this.props.desc}
                    </td>
                    <td className="table-row_column">
                        {this.props.message}
                    </td>
                    <td className="table-row_column">
                        <button className="row-column_responseButton" type="submit">Ответить</button>
                    </td>
                    <td>
                        <button className="row-column_showDetailsButton">▼</button>
                    </td>
                </tr>
            );
        }
    }

class BidDetailsNumberAndButtonRow extends React.Component {
  render() {
      return(
          <tr className="table-row">
                    <td colSpan="6" className="table-row_column">
                        <p>Заявка №<span className="row-column_numOfBid">{this.props.number}</span></p>
                    </td>
                    <td>
                        <button className="row-column_hideDetailsButton" onClick = {this.handleChange}>▲</button>
                    </td>
                </tr>
      );
    }    
}


class BidDetailsRow extends React.Component {
    render() {
        return(
                <tr className="table-row">
                    <td className="table-row_column" colSpan={3}>
                        <p>Дата заявки: <span className="row-column_date">{this.props.date}</span></p>
                        <p>Описание: <span className="row-column_description"> {this.props.desc}</span></p>
                        <p>Регион/город: <span className="row-column_city"> {this.props.region}</span></p>
                    </td>
                    <td className="table-row_column">
                        <p>Контактное имя: <span className="row-column_name">{this.props.name}</span></p>
                        <p>Статус: <span className="row-column_status"> {this.props.status}</span></p>
                    </td>
                    <td className="table-row_column" colSpan={3}>
                        <p className="row-column_carmodel">{this.props.car}</p>
                        <p>Год выпуска: <span className="row-column_year"> {this.props.year} </span></p>
                        <p>Пробег: <span className="row-column_distance"> {this.props.year}</span></p>
                        <p>Двигатель: <span className="row-column_engineVolume"> {this.props.engine}</span></p>
                    </td>
                </tr>
        );
    }
}

class Bidtable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           bids: BIDS
        }
    }
    render() {
        var rows = [];
        this.state.bids.forEach(function(bid) {
            console.log(bid);
            if(bid.opened==false){
                rows.push(<BidRow number={bid.number} date = {bid.date} 
                message = {bid.message} desc = {bid.desc} region = {bid.region} 
                name = {bid.name} status = {bid.status} distanse = {bid.status}
                car = {bid.car} year = {bid.year} key = {bid.name} />);
            }
            else{
                rows.push(<BidDetailsNumberAndButtonRow number = {bid.number} key = {bid.number}/>);
                rows.push(<BidDetailsRow date = {bid.date} 
                message = {bid.message} desc = {bid.desc} region = {bid.region} 
                name = {bid.name} status = {bid.status} distanse = {bid.status}
                car = {bid.car} year = {bid.year} key = {bid.name} />);
            }
        });
        return(
            <table className="listBidCarcas-bidTable" cols={7} rows={4}>
            <thead>
                <tr className="listBidCarcas-bidTable_headTable">
                    <td>
                        №
                    </td>
                    <td>
                        Дата заявки
                    </td>
                    <td>
                        Марка/Модель
                    </td>
                    <td>
                        Описание
                    </td>
                    <td>
                        Новые сообщения
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
            </thead>
            <tbody>
                {rows}
          </tbody>
          </table>
        );
    }
}

var BIDS = [
  {number: "236", date: '25-10-2016', desc: 'Сосед козел', region: 'Москва и Мо / Москва', name: 'Ашот', message:"●", status: 'Оценка стоимости',car: 'Поршак', year: '2013', distanse: '1', engine: '5,0', opened: false},
  {number: "237", date: '26-10-2016', desc: 'Жена сдала на права', region: 'Москва и Мо / Москва', name: 'Авдот', message:"●", status: 'Оценка стоимости',car: 'Москвич 412', year: '1985', distanse: '2', engine: '1,1', opened: true},
  {number: "238", date: '27-10-2016', desc: 'Не гудит', region: 'Москва и Мо / Москва', name: 'Пахан', message:"●", status: 'Оценка стоимости',car: 'Утюг', year: '1920', distanse: '3', engine: '4,3', opened: false},
  {number: "239", date: '28-10-2016', desc: 'Не бибикает', region: 'Москва и Мо / Москва', name: 'Саня', message:"●", status: 'Оценка стоимости',car: 'Велосипед', year: '2014', distanse: '4', engine: '0', opened: false},
  {number: "240", date: '29-10-2016', desc: 'Хочу бэху', region: 'Москва и Мо / Москва', name: 'И я Саня', message:"●", status: 'Оценка стоимости',car: 'Двенаха', year: '2000', distanse: '5', engine: '1,6', opened: false},
  {number: "241", date: '30-10-2016', desc: 'Хочу хача', region: 'Москва и Мо / Москва', name: 'Эльвира', message:"●", status: 'Оценка стоимости',car: 'Ласточка', year: '1980', distanse: '6', engine: '1,2', opened: false},
  {number: "242", date: '01-11-2016', desc: 'Крым наш', region: 'Москва и Мо / Москва', name: 'Вова', message:"●", status: 'Оценка стоимости', car: 'Приора', year: '2014', distanse: '7', engine: '1,8', opened: false},
  {number: "243", date: '01-11-2016', desc: 'Аллах акбар', region: 'Москва и Мо / Москва', name: 'Тигран', message:"●", status: 'Оценка стоимости', car: 'ИЛ-2', year: '2016', distanse: '8', engine: '6000', opened: false}
];

export default Bidtable;

