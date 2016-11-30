import React from 'react'
import ReactDOM from 'react-dom'

class BidItem extends React.Component {
    render() {
        var date = new Date(this.props.bid.current_time*1000);
//        console.log(dat);
        return (
            <div>
            <div className="tabs-first tab-styling">
                <p> <span className="orderNumber">{this.props.bid.bid_id}</span>{' ' + this.props.bid.car.brand_name +' '+ this.props.bid.car.model_name}<span className="dateValue">{date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}</span></p>
                <p className = "bidWriting"> {this.props.bid.description} </p>
            </div>
            </div>
        );
    }
}
export default BidItem;