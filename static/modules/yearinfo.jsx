import React from 'react'
import ReactDOM from 'react-dom'

class Yearinfo extends React.Component {
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
              <div className="rightColumn-markModYear_yearInfo">
                            <select>
                                <option value="">2001</option>
                                <option value="">2007</option>
                                <option value="">2016</option>
                            </select>
                        </div>
        );
    }
}
export default Yearinfo;