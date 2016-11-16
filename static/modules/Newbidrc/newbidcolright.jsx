import React from 'react'
import ReactDOM from 'react-dom'
import Markinfo from './markinfo'
import Modinfo from './modinfo'
import Yearinfo from './yearinfo'
import Dateofrem from './dateofrem'
import Descworks from './descworks'
import Photo from './photo'
import Uploadphoto from './uploadphoto'

class Bidcolright extends React.Component {
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
            <div className="rightColumn">
                <div className="rightColumn-markModYear">
                    <Markinfo />
                    <Modinfo />
                    <Yearinfo />
                </div>


                <div className="rightColumn-whattoDo">
                   <Descworks />
                   <Photo />
                   <Uploadphoto />
                </div>
                <Dateofrem />
            </div>

        );
    }
}
export default Bidcolright;