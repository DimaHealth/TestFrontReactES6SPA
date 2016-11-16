import React from 'react'
import ReactDOM from 'react-dom'

class Inform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        let {message, value} = this.state;
        message.push(value);
        this.setState({ message, value: '' });
    }
    render() {
        return (
                    <div className="leftColumn-inform">
                        <p className="leftColumn-inform_title">Информация</p>
                    </div>
                        
        );
    }
}
export default Inform;