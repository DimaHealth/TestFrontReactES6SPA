import React from 'react'
import ReactDOM from 'react-dom'
import Bidcolright from './Newbidrc/newbidcolright'
import Bidcolleft from './Newbidlc/newbidcolleft'


class Newbidka extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        let {message, value} = this.state;
        message.push(value);
        this.setState({ message, value: '' });
    }
    render() {
        return (
            <div className="carcasnb">
                 <Bidcolleft/>
                 <Bidcolright/>
            </div>
        );
    }
}

export default Newbidka;