import React from 'react'
import ReactDOM from 'react-dom'
import NewBidForm from './NewBid/newbidform'


class NewBidApp extends React.Component {

    render() {
        return (
            <div className="carcasnb">
                 <NewBidForm />
            </div>
        );
    }
}

export default NewBidApp;