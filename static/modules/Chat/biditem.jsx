import React from 'react'
import ReactDOM from 'react-dom'

class BidItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

   onClick(e) {
     this.props.onClick(this.props.bid.bid_id);
  }
    render() {
        var date = new Date(this.props.bid.current_time*1000);
        let str;
//        console.log(dat);
        if (this.props.bid.description.length<=54){
            str = this.props.bid.description;
        } else {
            str = this.props.bid.description.substring(0,54) + '...';
        }
        return (
            <div className= {this.props.style} onClick = {this.onClick}>
                <p> <span className="orderNumber" >{this.props.bid.bid_id}</span>{' ' + this.props.bid.car.brand_name +' '+ this.props.bid.car.model_name}<span className="dateValue">{date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()}</span></p>
                <p className = "bidWriting"> {str} </p>
            </div>
        );
    }
}
export default BidItem;