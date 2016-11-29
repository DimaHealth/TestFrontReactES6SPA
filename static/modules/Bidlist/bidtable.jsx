import React from 'react'
import ReactDOM from 'react-dom'
import BidRows from './bidrows'

class Bidtable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bids: BIDS,
        }
    }
    render() {
        var rows = [], content = [];
        if (this.props.filter==0) {
            this.state.bids.forEach(function (bid, index) {
                    rows.push(<BidRows number={bid.number} date={bid.date}
                        message={bid.message} desc={bid.desc} region={bid.region}
                        opened={bid.opened} name={bid.name} status={bid.status} distanse={bid.status}
                        car={bid.car} year={bid.year} engine={bid.engine} key={index} />);
            });
        }
        else {
            var filter = this.props.filter.toString();
            this.state.bids.forEach(function (bid, index) {
                var stringBidNumber = bid.number.toString();
                if (stringBidNumber.indexOf(filter)!=-1) {
                    rows.push(<BidRows number={bid.number} date={bid.date}
                        message={bid.message} desc={bid.desc} region={bid.region}
                        opened={bid.opened} name={bid.name} status={bid.status} distanse={bid.status}
                        car={bid.car} year={bid.year} engine={bid.engine} key={index} />);
                }

            });
        }
        
        if(rows.length==0)
            return (<p className = "bidsNotFoundText">Заявки не найдены</p>);
        else
            return(<table className="listBidCarcas-bidTable" cols={7} rows={4}>
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
                {rows}
          </table>);
    }
}

var BIDS = [
  {number: 236, date: '25-10-2016', desc: 'Сосед козел', region: 'Москва и Мо / Москва', name: 'Ашот', message:"●", status: 'Оценка стоимости',car: 'Поршак', year: 2013, distanse: 1, engine: 5.0, opened: false},
  {number: 237, date: '26-10-2016', desc: 'Жена сдала на права', region: 'Москва и Мо / Москва', name: 'Авдот', message:"●", status: 'Оценка стоимости',car: 'Москвич 412', year: 1985, distanse: 2, engine: 1.1, opened: false},
  {number: 238, date: '27-10-2016', desc: 'Не гудит', region: 'Москва и Мо / Москва', name: 'Пахан', message:"●", status: 'Оценка стоимости',car: 'Утюг', year: 1920, distanse: 3, engine: 4.3, opened: false},
  {number: 239, date: '28-10-2016', desc: 'Не бибикает', region: 'Москва и Мо / Москва', name: 'Саня', message:"●", status: 'Оценка стоимости',car: 'Велосипед', year: 2014, distanse: 4, engine: 0, opened: false},
  {number: 240, date: '29-10-2016', desc: 'Хочу бэху', region: 'Москва и Мо / Москва', name: 'И я Саня', message:"●", status: 'Оценка стоимости',car: 'Двенаха', year: 2000, distanse: 5, engine: 1.6, opened: false},
  {number: 241, date: '30-10-2016', desc: 'Хочу хача', region: 'Москва и Мо / Москва', name: 'Эльвира', message:"●", status: 'Оценка стоимости',car: 'Ласточка', year: 1980, distanse: 6, engine: 1.2, opened: false},
  {number: 242, date: '01-11-2016', desc: 'Крым наш', region: 'Москва и Мо / Москва', name: 'Вова', message:"●", status: 'Оценка стоимости', car: 'Приора', year: 2014, distanse: 7, engine: 1.8, opened: false},
  {number: 243, date: '01-11-2016', desc: 'Аллах акбар', region: 'Москва и Мо / Москва', name: 'Тигран', message:"●", status: 'Оценка стоимости', car: 'ИЛ-2', year: 2016, distanse: 8, engine: 6000, opened: false}
];

export default Bidtable;