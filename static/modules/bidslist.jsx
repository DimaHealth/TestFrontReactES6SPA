import React from 'react'
import ReactDOM from 'react-dom'
import Filtertable from './filtertable'
import Bidtable from './bidtable'


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
                <Filtertable />
                <Bidtable />
            </div>
        );
    }  
}
export default BidkiList;