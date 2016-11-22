import React from 'react'
import ReactDOM from 'react-dom'

class UploadPhoto extends React.Component {
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
                 <div className="rightColumn-whattoDo_uploadPhoto">
                        <p className="rightColumn-whattoDo_uploadPhotoBut">
                            <input className="whattoDo-uploadPhotoBut-uploadButTitle" type="file"  name="photo" multiple accept="image/*"/>
                        </p>
                    </div>
                        
        );
    }
}
export default UploadPhoto;