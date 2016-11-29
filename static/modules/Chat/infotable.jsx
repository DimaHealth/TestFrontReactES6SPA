import React from 'react'
import ReactDOM from 'react-dom'

class Infotable extends React.Component {
    render() {
        return (
            <p>
                <span className="orderNumber-details"></span>
                <span className="icon"> </span>
                <span className="vinNumber"></span>
            </p>
            <p className="bidWriting-details"></p>
              <table className="chat-window_table">
              <tbody>
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
                </tbody>
            </table>
        );
    }
}
export default Infotable;