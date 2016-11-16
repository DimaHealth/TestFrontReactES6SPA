import React from 'react'
import ReactDOM from 'react-dom'

class Photo extends React.Component {
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
              <div className="rightColumn-whattoDo_photo">
                        <p className="rightColumn-whattoDo_photoInfo">Вы можете добавить несколько фотографий это поможет автосервису точнее определить стоимость работ</p>
                    </div>
                  
                        
        );
    }
}
export default Photo;