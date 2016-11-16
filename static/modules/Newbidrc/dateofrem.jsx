import React from 'react'
import ReactDOM from 'react-dom'

class Dateofrem extends React.Component {
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
                    <div className="rightColumn-dateofRem">
                        <p className="rightColumn-dateofRem_title">Желаемая дата ремонта</p>
                        <input className="rightColumn-dateofRem_titleInfo" type="date" /><br/>
                        <button className="rightColumn-dateofRem_titleSbmBtn" type="submit">Отправить</button>
                    </div>
                        
        );
    }
}
export default Dateofrem;