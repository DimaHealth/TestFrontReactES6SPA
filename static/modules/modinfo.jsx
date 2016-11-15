import React from 'react'
import ReactDOM from 'react-dom'

class Modinfo extends React.Component {
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
                <div className="rightColumn-markModYear_modInfo">
                            <select>
                                <option value="">One-77</option>
                                <option value="">M6</option>
                                <option value="">Sprinter</option>
                            </select>
                        </div>
                        
        );
    }
}
export default Modinfo;