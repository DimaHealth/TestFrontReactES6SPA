import React from 'react'
import ReactDOM from 'react-dom'

class Markinfo extends React.Component {
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
             <div className="rightColumn-markModYear_markInfo">
                            <select>
                                <option value="">Aston Martin</option>
                                <option value="">BMW</option>
                                <option value="">Mercedes</option>
                            </select>
                        </div>
        );
    }
}
export default Markinfo;