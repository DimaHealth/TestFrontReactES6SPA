import React from 'react'
import ReactDOM from 'react-dom'
import Filtertable from './filtertable'
import Bidtable from './bidtable'


class BidkiList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 0
        };
        this.searchUpdater = this.searchUpdater.bind(this);
    }
    searchUpdater (filterValue){
        this.setState({ filter: filterValue});
    }
    render() {
        let requestID = this.state.filter;
        return(
            <div className="listBidCarcas">
                <Filtertable searchUpdate = {this.searchUpdater}/>
                <Bidtable filter = {requestID} />
            </div>
        );
    }  
}
export default BidkiList;