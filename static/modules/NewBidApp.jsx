import React from 'react'
import ReactDOM from 'react-dom'
import NewBidForm from './NewBid/newbidform'

require("./NewBid/components/scss/newbid.scss");

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