import React from 'react'
import ReactDOM from 'react-dom'

class BidkiList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        let {message, value} = this.state;
        message.push(value);
        this.setState({ message, value: '' });
    }
    render() {
        return(
            <div className="listBidCarcas">
                <table className="listBidCarcas-filterTable" border="1">
                    <tr>
                        <td>
                            <p>
                                Фильтрация по № заявки:
                            </p>
                        </td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                </table>
                
                <table className="listBidCarcas-bidTable" cols="7" rows="4" border="1">
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
                    <tr className="table-row">
                        <td className="table-row_column">
                            234
                        </td>
                        <td className="table-row_column">
                            23-10-2016
                        </td>
                        <td className="table-row_column">
                            ВАЗ 2110
                        </td>
                        <td className="table-row_column">
                            Ничего не работает!!! АААА!
                        </td>
                        <td className="table-row_column">
                            ●
                        </td>
                        <td className="table-row_column">
                            <button className="row-column_responseButton" type="submit">Ответить</button>
                        </td>
                        <td>
                            ▼
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td colSpan="6" className="table-row_column">
                            <p>Заявка <span className="row-column_numOfBid"> №236</span></p>    
                        </td>
                        <td>
                            ▲
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td className="table-row_column" colSpan="3">
                            <p>Дата заявки: <span className="row-column_date">25-10-2016</span></p>
                            <p>Описание: <span className = "row-column_description"> ТО 2000</span></p>
                            <p>Регион/город: <span className="row-column_city"> Москва и Мо / Москва</span></p>
                        </td>
                        <td className="table-row_column">
                            <p>Контактное имя: <span className="row-column_name"> Вася</span></p>
                            <p>Статус: <span className="row-column_status"> Оценка стоимости</span></p>
                        </td>
                        <td className="table-row_column" colspan="3">
                            <p className="row-column_carmodel">Honda Accord</p>
                            <p>Год выпуска: <span className="row-column_year"> 2004 </span></p>
                            <p>Пробег: <span className="row-column_distance"> 19400</span></p>
                            <p>Двигатель: <span className="row-column_engineVolume"> 2.4</span></p>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }  
}
export default BidkiList;