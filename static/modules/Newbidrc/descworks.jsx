import React from 'react'
import ReactDOM from 'react-dom'

class Descworks extends React.Component {
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
               <div className="rightColumn-whattoDo_descWorks">
                        <textarea className="rightColumn-whattoDo_descWorksInfo" placeholder="Опишите работы которые необходимо сделать" type="text" rows="6" cols="6"></textarea>
                    </div>
                  
                        
        );
    }
}
export default Descworks;