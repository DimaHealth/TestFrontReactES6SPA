import React from 'react'
import ReactDOM from 'react-dom'

class BidItem extends React.Component {
    render() {
        return (
            <div>
            <div className="tabs-first tab-styling">
                <p> <span className="orderNumber">{this.props.bid.bid_id}</span>{' ' + this.props.bid.car.brand_name +' '+ this.props.bid.car.model_name}<span className="dateValue">25.10.2016 </span> <span className="vinNumber">VIN не указан</span></p>
                <p className = "bidWriting"> {this.props.bid.description} </p>
            </div>
            </div>
        );
    }
}
export default BidItem;