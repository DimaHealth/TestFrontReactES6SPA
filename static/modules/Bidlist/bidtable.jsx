import React from 'react'
import ReactDOM from 'react-dom'
import BidRows from './bidrows'


class Bidtable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bids: []
        }
    }

    componentDidMount(){ 
        $.getJSON("./static/json/bidslist.json", 
            function(data) {
                this.setState({bids: data})
            }.bind(this));
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

export default Bidtable;