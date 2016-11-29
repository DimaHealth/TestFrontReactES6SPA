import React from 'react'
import ReactDOM from 'react-dom'

class BidItem extends React.Component {
    render() {
        return (
            <div className="tabs-first tab-styling">
                <p> <span className="orderNumber">№4491</span> Chevrolet Avalanche <span className="dateValue">25.10.2016 </span> <span className="vinNumber">VIN не указан</span></p>
                <p className = "bidWriting"> ybxt </p>
            </div>
            <div className = "tabs-second tab-styling ">
                <p> <span className="orderNumber">№5000</span> Chevrolet Avalanche <span className="dateValue">30.12.2016 </span> <span className="vinNumber">BY43WQ12BC54KK321</span></p>
                <p className = "bidWriting"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores consequatur  </p>
            </div>
            <div className = "tabs-third tab-styling">
                <p> <span className="orderNumber">№5000</span> Bentley Continental Supersports <span className="dateValue">30.12.2016 </span> <span className="vinNumber">BY43WQ12BC54KK321</span></p>
                <p className = "bidWriting"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores consequatur adipisicing elit. Dolores consequatur </p>
            </div>
        );
    }
}
export default BidItem;