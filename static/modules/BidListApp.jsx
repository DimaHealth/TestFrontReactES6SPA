import React from 'react'
import ReactDOM from 'react-dom'
import Filtertable from './bidlist/filtertable'
import Bidtable from './bidlist/bidtable'

require('./bidlist/scss/listbid.scss');

class BidkiList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 0
        };
        this.searchUpdater = this.searchUpdater.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    searchUpdater (filterValue){
        this.setState({ filter: filterValue});
    }

    handleSearchChange(filter) {
        this.setState({filter});
    }
    render() {
        let requestID = this.state.filter;
        return(
            <div className="listBidCarcas">
                <Filtertable searchUpdate = {this.searchUpdater} value = {this.state.filter} onChange = {this.handleSearchChange}/>
                <Bidtable filter = {requestID} />
            </div>
        );
    }  
}
export default BidkiList;