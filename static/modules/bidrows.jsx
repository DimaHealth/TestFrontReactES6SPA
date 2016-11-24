import React from 'react'
import ReactDOM from 'react-dom'


class BidRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: props.opened
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleAnswer(){
        console.log(this.props.number);
    }

    handleSubmit() {
        this.setState({ opened: true });
    }

    handleChange(){
        this.setState({ opened: false });
    }
    

    render() {
        if (!this.state.opened) 
        {
           return(
            <tbody>
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
                        <button className="row-column_responseButton" onClick = {this.handleAnswer}>Ответить</button>
                    </td>
                    <td>
                        <button className="row-column_showDetailsButton" onClick={this.handleSubmit}>▼</button>
                    </td>
                </tr>
            </tbody>
            );
        }
        else {
            return(
                <tbody>
                    <tr className="table-row">
                        <td colSpan="6" className="table-row_column">
                            <p>Заявка №<span className="row-column_numOfBid">{this.props.number}</span></p>
                        </td>
                        <td>
                            <button className="row-column_hideDetailsButton" onClick={this.handleChange}>▲</button>
                        </td>
                    </tr> 
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
                </tbody>
            )       
        }
    }
}
export default BidRows;